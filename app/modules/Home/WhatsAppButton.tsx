import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923001234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-blue-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition duration-300 animate-bounce"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}