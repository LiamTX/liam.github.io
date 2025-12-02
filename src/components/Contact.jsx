import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Linkedin,
  Github,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const personalInfo = t.personalInfo;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    setTimeout(() => {
      toast({
        title: t.contact.successTitle,
        description: t.contact.successMessage,
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        budget: "",
        timeline: "",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t.contact.contactTypes.email,
      info: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      color: "blue",
    },
    {
      icon: Phone,
      title: t.contact.contactTypes.phone,
      info: personalInfo.phone,
      link: `tel:${personalInfo.phone}`,
      color: "green",
    },
    {
      icon: MapPin,
      title: t.contact.contactTypes.location,
      info: personalInfo.location,
      color: "purple",
    },
  ];

  const budgetOptions = t.contact.budgetOptions;
  const timelineOptions = t.contact.timelineOptions;

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                {t.contact.contactInfo}
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        item.color === "blue"
                          ? "bg-blue-500/20 text-blue-400"
                          : item.color === "green"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-purple-500/20 text-purple-400"
                      }`}
                    >
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        {item.title}
                      </h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-gray-400">{item.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">{t.contact.social}</h4>
              <div className="flex space-x-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center text-white transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <CheckCircle size={20} className="text-green-400 mr-2" />
                <span className="text-green-400 font-semibold">
                  {t.contact.available}
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-700/50 border-gray-600">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  {t.contact.formTitle}
                </CardTitle>
                <p className="text-gray-400">
                  {t.contact.formSubtitle}
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        {t.contact.formFields.name}
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                        placeholder={t.contact.formFields.namePlaceholder}
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">
                        {t.contact.formFields.email}
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                        placeholder={t.contact.formFields.emailPlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      {t.contact.formFields.subject}
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                      placeholder={t.contact.formFields.subjectPlaceholder}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        {t.contact.formFields.budget}
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-800 border border-gray-600 text-white rounded-md focus:border-blue-500 focus:outline-none"
                      >
                        <option value="">{t.contact.formFields.budgetSelect}</option>
                        {budgetOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">
                        {t.contact.formFields.timeline}
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-800 border border-gray-600 text-white rounded-md focus:border-blue-500 focus:outline-none"
                      >
                        <option value="">{t.contact.formFields.timelineSelect}</option>
                        {timelineOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      {t.contact.formFields.message}
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 resize-none"
                      placeholder={t.contact.formFields.messagePlaceholder}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                        {t.contact.sending}
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        {t.contact.sendButton}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
