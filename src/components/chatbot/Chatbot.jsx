import React, { useState, useEffect } from "react";
import {
  Send,
  X,
  Home,
  HelpCircle,
  MessageSquare,
  ChevronRight,
  ExternalLink,
  ArrowLeft,
  Building2,
  Users,
  LayoutGrid,
  Globe,
} from "lucide-react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Chatbot.css";

// Translations for static content
const TRANSLATIONS = {
  en: {
    faq: [
      {
        question: "What is the ODOP (One District One Product) scheme?",
        answer:
          "ODOP is an initiative by the Government of India that promotes one identified product from each district to support its production, branding, and market access. It aims to make local products globally competitive.",
        // image: "./odop.jpg",
      },
      {
        question: "How can I find the ODOP product for my district?",
        answer:
          "You can visit the ODOP portal or contact the District Industries Center (DIC) to know your district’s identified ODOP product. MPIDC can also guide you with relevant information and contacts.",
        // image: "/odop-faq.jpg",
      },
      {
        question: "What support is available under ODOP?",
        answer:
          "Support under ODOP includes assistance in branding, packaging, marketing, skill training, financial aid through PMFME and other schemes, and participation in trade fairs and exhibitions.",
        // image: "/odop-phases.jpg",
      },
      {
        question: "How can I get my ODOP product exported?",
        answer:
          "MPIDC’s Export Cell helps ODOP entrepreneurs with IEC registration, documentation, market access, packaging requirements, and buyer matchmaking to enable smooth export of your ODOP product.",
        // image: "/odop-export.jpeg",
      },
    ],
    help: [
      {
        title:
          "How to Start a Business under the ODOP Village Accelerator Program?",
        content:
          "To start a business under the ODOP Village Accelerator Program, identify your district’s ODOP product and connect with your local District Industries Centre (DIC). The program supports entrepreneurs with business registration (via Udyam), skill training, raw material sourcing, machinery setup, and access to working capital. MPIDC and partner agencies provide handholding throughout the process.",
        icon: Home,
        // image: "/odop-mp.jpg",
      },
      {
        title: "What is the ODOP Village Accelerator Program?",
        content:
          "The ODOP Village Accelerator Program is an initiative by MPIDC to strengthen rural entrepreneurship by supporting ODOP-based micro and small enterprises. It focuses on capacity building, infrastructure development, access to finance, product branding, packaging, and market linkages, especially for artisans, SHGs, and farmer groups in villages.",
        icon: Building2,
        // image: "/village-accelerator.jpg",
      },
      {
        title:
          "How Does the Program Help with Product Development and Promotion?",
        content:
          "The program helps in standardizing the product, improving design and quality, enhancing packaging, and obtaining necessary certifications. It connects entrepreneurs with branding experts and institutions like NIFT and IIP. Products are promoted through state-level exhibitions, online platforms, and ODOP-exclusive retail channels.",
        icon: LayoutGrid,
        // image: "/odop-help.svg",
      },
      {
        title: "How Does the Program Support Market Linkages?",
        content:
          "The ODOP Village Accelerator Program facilitates direct linkages with buyers, government e-marketplaces (GeM), private retailers, and export channels. It organizes buyer-seller meets, onboarding support for e-commerce platforms, and exposure visits to trade fairs to help rural entrepreneurs expand their markets.",
        icon: Users,
        // image: "/odop-guide.png",
      },
    ],
    welcomeMessages: [
      {
        sender: "bot",
        text: "Hello! I'm your ODOP Village Accelerator Helpline Assistant.",
      },
      {
        sender: "bot",
        text: "I'm here to guide you through ODOP Village Accelerator Program.",
      },
      { sender: "bot", text: "How can I assist you today?" },
    ],
    ui: {
      homeTitle: "Welcome to ODOP Village Accelerator Helpline",
      homeSubtitle: "Hi, I'm here to guide you – ask me anything!",
      sendMessage: "Send us a message",
      replySoon: "We will reply as soon as we can",
      typeMessage: "Type your query...",
      back: "Back",
      home: "Home",
      messages: "Messages",
      help: "Help",
    },
  },
  hi: {
    faq: [
      {
        question: "ODOP (वन डिस्ट्रिक्ट वन प्रोडक्ट) योजना क्या है?",
        answer:
          "ODOP भारत सरकार की एक पहल है जिसमें प्रत्येक जिले के एक प्रमुख उत्पाद को बढ़ावा दिया जाता है। इसका उद्देश्य स्थानीय उत्पादों को वैश्विक स्तर पर प्रतिस्पर्धी बनाना है।",
        // image: "/odop.jpg",
      },
      {
        question: "मैं अपने जिले का ODOP उत्पाद कैसे जान सकता हूँ?",
        answer:
          "आप ODOP पोर्टल पर जाकर या जिला उद्योग केंद्र (DIC) से संपर्क कर अपने जिले का उत्पाद जान सकते हैं। MPIDC भी आपको जानकारी देने में सहायता कर सकता है।",
        // image: "/odop-products.jpeg",
      },
      {
        question: "ODOP के अंतर्गत क्या सहायता मिलती है?",
        answer:
          "ODOP के तहत ब्रांडिंग, पैकेजिंग, विपणन, कौशल प्रशिक्षण, PMFME जैसी योजनाओं के माध्यम से वित्तीय सहायता और व्यापार मेलों में भागीदारी जैसी सुविधाएं मिलती हैं।",
        // image: "/odop-phases.jpg",
      },
      {
        question: "मैं अपने ODOP उत्पाद को एक्सपोर्ट कैसे कर सकता हूँ?",
        answer:
          "MPIDC की एक्सपोर्ट सेल आपको IEC रजिस्ट्रेशन, डॉक्यूमेंटेशन, मार्केट एक्सेस, पैकेजिंग और खरीदारों से जुड़ने में मदद करती है ताकि आप अपने ODOP उत्पाद का सफल निर्यात कर सकें।",
        // image: "/odop-faq.png",
      },
    ],
    help: [
      {
        title:
          "ODOP विलेज एक्सेलेरेटर प्रोग्राम के तहत बिज़नेस कैसे शुरू करें?",
        content:
          "ODOP विलेज एक्सेलेरेटर प्रोग्राम के तहत बिज़नेस शुरू करने के लिए अपने जिले के ODOP उत्पाद की पहचान करें और जिला उद्योग केंद्र (DIC) से संपर्क करें। यह कार्यक्रम व्यवसाय पंजीकरण, प्रशिक्षण, मशीनरी, कच्चे माल की व्यवस्था, और फंडिंग में सहायता करता है। MPIDC पूरे प्रोसेस में आपका मार्गदर्शन करता है।",
        icon: Home,
        // image: "/odop-business.jpeg",
      },
      {
        title: "ODOP विलेज एक्सेलेरेटर प्रोग्राम क्या है?",
        content:
          "यह कार्यक्रम ग्रामीण क्षेत्रों में ODOP उत्पादों पर आधारित सूक्ष्म व लघु उद्योगों को बढ़ावा देता है। यह कौशल विकास, ब्रांडिंग, पैकेजिंग, वित्तीय सहायता, और मार्केट एक्सेस पर केंद्रित है। यह खासतौर पर महिला SHG, कारीगरों और किसान समूहों के लिए फायदेमंद है।",
        icon: Building2,
        // image: "/village-accelerator.jpg",
      },
      {
        title: "यह प्रोग्राम उत्पाद को कैसे बेहतर बनाता है?",
        content:
          "ODOP प्रोग्राम उत्पाद की गुणवत्ता सुधारने, आधुनिक डिजाइन, आकर्षक पैकेजिंग और प्रमाणीकरण में सहायता करता है। इसमें NIFT और IIP जैसी संस्थाओं की मदद से उत्पाद को ब्रांडेड और बाजार योग्य बनाया जाता है।",
        icon: LayoutGrid,
        // image: "/odop-help.svg",
      },
      {
        title: "मार्केट से कैसे जोड़ा जाता है?",
        content:
          "यह प्रोग्राम खरीदारों से डायरेक्ट लिंक, ई-कॉमर्स प्लेटफॉर्म्स, GeM पोर्टल, और ट्रेड फेयर जैसे आयोजनों के ज़रिए मार्केट एक्सेस देता है। ODOP उद्यमियों को वर्चुअल B2B मीटिंग, प्रदर्शनियों और निर्यात मेलों से जोड़ा जाता है।",
        icon: Users,
        // image: "/odop-guide.png",
      },
    ],
    welcomeMessages: [
      {
        sender: "bot",
        text: "नमस्ते! मैं आपकी ओडीओपी विलेज एक्सेलेरेटर हेल्पलाइन असिस्टेंट हूँ।",
      },
      {
        sender: "bot",
        text: "मैं यहाँ ओडीओपी विलेज एक्सेलेरेटर प्रोग्राम के माध्यम से आपकी मार्गदर्शन करने के लिए हूँ।",
      },
      { sender: "bot", text: "आज मैं आपकी कैसे मदद कर सकती हूँ?" },
    ],
    ui: {
      homeTitle: "ओडीओपी विलेज एक्सेलेरेटर हेल्पलाइन में आपका स्वागत है।",
      homeSubtitle: "हाय, मैं मार्गदर्शन के लिए यहाँ हूँ – मुझसे कुछ भी पूछें!",
      sendMessage: "हमें एक संदेश भेजें",
      replySoon: "हम जितनी जल्दी हो सके जवाब देंगे",
      typeMessage: "अपना सवाल टाइप करें...",
      back: "वापस",
      home: "होम",
      messages: "संदेश",
      help: "सहायता",
    },
  },
};

// System prompts for different languages
const SYSTEM_PROMPTS = {
  en: (detectedLang) => `
    You are Maitreyee, a professional and friendly chatbot created by MPIDC to assist users with queries related to exports and business support. Your role is to provide short, helpful, and professional answers using the provided FAQ as the primary source. If the answer is not in the FAQ, use trusted government or trade-related sources for accurate information. Always maintain a polite, knowledgeable, and approachable tone, like a government helpdesk officer. 
    
    Respond in "English", "Hindi" or "Hinglish" based on the user's input language.
  `,
  hi: (detectedLang) => `
    आप मैत्रयी हैं, MPIDC द्वारा बनाया गया एक पेशेवर और दोस्ताना चैटबॉट, जो निर्यात और व्यवसाय सहायता से संबंधित सवालों में उपयोगकर्ताओं की मदद करता है। आपका काम प्रदान किए गए FAQ का उपयोग करके संक्षिप्त, सहायक और पेशेवर उत्तर देना है। यदि FAQ में उत्तर नहीं है, तो विश्वसनीय सरकारी या व्यापार-संबंधी स्रोतों से सटीक जानकारी लें। हमेशा विनम्र, ज्ञानवर्धक और सुलभ स्वर बनाए रखें, जैसे एक सरकारी हेल्पडेस्क अधिकारी। 
    
    उपयोगकर्ता के इनपुट भाषा के अनुसार "हिंग्लिश", "अंग्रेजी" या "हिंदी" में उत्तर दें।
  `,
};

const HelpSection = ({ selectedHelp, setSelectedHelp, language }) => {
  const t = TRANSLATIONS[language].help;
  if (selectedHelp) {
    return (
      <div className="help-detail-container">
        <div className="help-detail-header">
          <button onClick={() => setSelectedHelp(null)} className="back-button">
            <ArrowLeft size={16} className="me-2" />
            {TRANSLATIONS[language].ui.back}
          </button>
        </div>
        <div className="help-detail-content">
          <div className="container">
            <h2 className="help-title">{selectedHelp.title}</h2>
            <div className="row">
              <div className="col-md-6">
                <p
                  className="help-text"
                  dangerouslySetInnerHTML={{
                    __html: selectedHelp.content.replace(
                      /\[(.*?)\]\((.*?)\)/g,
                      '<a href="$2" target="_blank">$1</a>'
                    ),
                  }}
                />
              </div>
              {/*<div className="col-md-6">
                <div className="help-image-container">
                  <img
                    src={selectedHelp.image}
                    alt={selectedHelp.title}
                    className="help-image"
                  />
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="help-section-container">
      <div className="help-list">
        {t.map((section, index) => {
          const Icon = section.icon;
          return (
            <button
              key={index}
              onClick={() => setSelectedHelp(section)}
              className="help-card"
            >
              <div className="help-card-content">
                <div className="help-icon-container">
                  <Icon size={18} className="help-icon" />
                </div>
                <span className="help-card-title">{section.title}</span>
              </div>
              <ChevronRight size={16} className="help-card-arrow" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  const [selectedHelp, setSelectedHelp] = useState(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [chatStartTime, setChatStartTime] = useState(null);
  const [language, setLanguage] = useState("en");
  const [detectedLanguage, setDetectedLanguage] = useState("en");
  const messagesEndRef = React.useRef(null);

  // Language detection function
  const detectLanguage = (text) => {
    if (!text.trim()) return detectedLanguage;

    // Common Hindi words in Roman script
    const hindiWords = [
      "mujhe",
      "muje",
      "kaise",
      "kese",
      "kya",
      "hai",
      "mein",
      "me",
      "kar",
      "ho",
      "aur",
      "ke",
      "ki",
      "ko",
      "se",
      "par",
      "tak",
    ];

    // Check for Devanagari (Hindi script)
    const hasHindiScript = /[\u0900-\u097F]/.test(text);

    if (hasHindiScript) {
      return "hi";
    }

    const words = text.toLowerCase().split(/\s+/);
    let hindiWordCount = 0;
    let englishWordCount = 0;

    words.forEach((word) => {
      if (hindiWords.includes(word)) {
        hindiWordCount++;
      } else if (/^[a-z]+$/i.test(word)) {
        englishWordCount++;
      }
    });

    if (hindiWordCount > 0) {
      return "hi"; // Treat Roman-script Hindi as Hindi
    }

    return "en";
  };

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    setMessages([]);
  };

  const renderMessages = () => (
    <div className="chat-container">
      <div className="message-list">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.sender === "user" ? "message-user" : "message-bot"
            }`}
          >
            {msg.sender === "bot" && (
              <div className="message-avatar">
                <img
                  src="/WhatsApp Image 2025-04-29 at 11.56.21_a571d780.jpg"
                  alt="Bot Avatar"
                  className="message-avatar-img"
                />
              </div>
            )}
            <div
              className={`message-content ${
                msg.sender === "user"
                  ? "message-content-user"
                  : "message-content-bot"
              }`}
            >
              <p className="message-text">{msg.text}</p>
              <span className="message-time">
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="message message-bot">
            <div className="message-avatar">
              <img
                src="/WhatsApp Image 2025-04-29 at 11.56.21_a571d780.jpg"
                alt="Bot Avatar"
                className="message-avatar-img"
              />
            </div>
            <div className="typing-indicator">
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input-container">
        <form onSubmit={sendMessage} className="chat-input-form">
          <input
            type="text"
            placeholder={TRANSLATIONS[language].ui.typeMessage}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chat-input"
          />
          <button type="submit" className="chat-send-button">
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );

  const sendMessage = async (e) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    const detectedLang = detectLanguage(userMessage) || "en";

    setDetectedLanguage(detectedLang);

    // Add the new user message to the messages array for display
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");
    setIsTyping(true);

    if (!chatStartTime) setChatStartTime(Date.now());

    // Prepare the messages for the API (last 4 + current user message)
    const apiMessages = [
      ...messages.slice(-4).map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text,
      })),
      { role: "user", content: userMessage },
    ];

    try {
      const response = await axios.post(
        import.meta.env.VITE_OPENAI_API_URL,
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: SYSTEM_PROMPTS[detectedLang](detectedLang),
            },
            ...apiMessages,
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      let botResponse =
        response.data.choices?.[0]?.message?.content ||
        "Error generating response.";

      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage =
        detectedLang === "hi"
          ? "क्षमा करें, मुझे एक त्रुटि का सामना करना पड़ा। कृपया पुनः प्रयास करें।"
          : "Sorry, I encountered an error. Please try again.";
      setMessages((prev) => [...prev, { sender: "bot", text: errorMessage }]);
    } finally {
      setIsTyping(false);
    }
  };

  const addMessagesSequentially = async () => {
    const welcomeMessages = TRANSLATIONS[language].welcomeMessages;
    for (let i = 0; i < welcomeMessages.length; i++) {
      setIsTyping(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMessages((prev) => [...prev, welcomeMessages[i]]);
      setIsTyping(false);
      if (i < welcomeMessages.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }
  };

  useEffect(() => {
    if (isOpen && activeSection === "messages" && messages.length === 0) {
      addMessagesSequentially();
    }
  }, [isOpen, activeSection, language]);

  const renderHome = () => (
    <div className="home-container">
      <div className="home-header">
        <div className="home-header-text">
          <h1 className="home-title">{TRANSLATIONS[language].ui.homeTitle}</h1>
          <h2 className="home-subtitle">
            {TRANSLATIONS[language].ui.homeSubtitle}
          </h2>
        </div>
        <div className="home-avatar">
          <img
            src="/WhatsApp Image 2025-04-29 at 11.56.21_a571d780.jpg"
            alt="chatbot avatar"
            className="home-avatar-img"
          />
        </div>
      </div>
      <div className="home-content">
        <div className="faq-container">
          {TRANSLATIONS[language].faq.map((faq, index) => (
            <button
              key={index}
              onClick={() => setSelectedFAQ(faq)}
              className="faq-card"
            >
              <span className="faq-question">{faq.question}</span>
              <ChevronRight size={16} className="faq-arrow" />
            </button>
          ))}
        </div>
        <button
          onClick={() => setActiveSection("messages")}
          className="contact-button"
        >
          <div className="contact-title">
            {TRANSLATIONS[language].ui.sendMessage}
          </div>
          <div className="contact-subtitle">
            {TRANSLATIONS[language].ui.replySoon}
          </div>
        </button>
      </div>
    </div>
  );

  const renderFAQDetail = () => (
    <div className="faq-detail-container">
      <div className="faq-detail-header">
        <button onClick={() => setSelectedFAQ(null)} className="back-button">
          <ArrowLeft size={16} className="me-2" />
          {TRANSLATIONS[language].ui.back}
        </button>
      </div>
      <div className="faq-detail-content">
        <div className="container">
          <h2 className="faq-title">{selectedFAQ.question}</h2>
          <div className="row">
            <div className="col-md-6">
              <p className="faq-answer">{selectedFAQ.answer}</p>
            </div>
            {/* <div className="col-md-6">
              <div className="faq-image-container">
                <img
                  src={selectedFAQ.image}
                  alt={selectedFAQ.question}
                  className="faq-image"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );

  // Update scroll-to-bottom effect to include isTyping
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const getChatbotDimensions = () => {
    if (window.innerWidth <= 640) {
      return {
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        zIndex: "9999",
      };
    } else if (window.innerWidth <= 1024) {
      return { width: "350px", height: "500px" };
    } else {
      return { width: "400px", height: "600px" };
    }
  };

  return (
    <div className="chatbot-container">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="chatbot-toggle-button"
        >
          <img
            src="/WhatsApp Image 2025-04-29 at 11.56.21_a571d780.jpg"
            alt="Bot Avatar"
            className="message-avatar-img"
          />
        </button>
      ) : (
        <div className="chatbot-window" style={getChatbotDimensions()}>
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <div className="chatbot-logo">
                <img src="/ODOP Logo.png" alt="Logo" className="logo-img" />
              </div>
              <div className="language-toggle">
                <Globe size={18} stroke="#fff" className="me-2" />
                <select
                  value={language}
                  onChange={handleLanguageChange}
                  className="language-select"
                >
                  <option value="en">English</option>
                  <option value="hi">हिन्दी</option>
                </select>
              </div>
              <button onClick={() => setIsOpen(false)} className="close-button">
                <X size={18} />
              </button>
            </div>
          </div>
          <div className="chatbot-body">
            {selectedFAQ ? (
              renderFAQDetail()
            ) : (
              <>
                {activeSection === "home" && renderHome()}
                {activeSection === "messages" && renderMessages()}
                {activeSection === "help" && (
                  <HelpSection
                    selectedHelp={selectedHelp}
                    setSelectedHelp={setSelectedHelp}
                    language={language}
                  />
                )}
              </>
            )}
          </div>
          <div className="chatbot-footer">
            <div className="chatbot-nav">
              {[
                {
                  section: "home",
                  icon: Home,
                  label: TRANSLATIONS[language].ui.home,
                },
                {
                  section: "messages",
                  icon: MessageSquare,
                  label: TRANSLATIONS[language].ui.messages,
                },
                {
                  section: "help",
                  icon: HelpCircle,
                  label: TRANSLATIONS[language].ui.help,
                },
              ].map(({ section, icon: Icon, label }) => (
                <button
                  key={section}
                  onClick={() => {
                    setActiveSection(section);
                    setSelectedFAQ(null);
                  }}
                  className={`nav-button ${
                    activeSection === section ? "nav-button-active" : ""
                  }`}
                >
                  <Icon size={18} className="nav-icon" />
                  <span className="nav-label">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
