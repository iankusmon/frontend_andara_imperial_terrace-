import React from "react";
import Image from "next/image";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from "next-share";
import { FaFacebook, FaWhatsapp, FaTelegram, FaInstagram, FaTimes } from "react-icons/fa";

const DOMAIN = "https://www.andaraimperialterrace.co.id";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  shareLink: string;
  referralCode: string;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, message, shareLink, referralCode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 text-center relative z-50">
        <button className="absolute top-2 right-2" onClick={onClose}>
          <FaTimes className="text-2xl" />
        </button>
        <h3 className="text-lg font-bold mb-2">Bagikan</h3>
        <p className="mb-4">{message}</p>
        <div className="flex gap-3 justify-center">
          <FacebookShareButton url={`${DOMAIN}${shareLink}?referral_code=${referralCode}`} hashtag={message}>
            <FaFacebook className="text-blue-600 text-3xl cursor-pointer" />
          </FacebookShareButton>
          <WhatsappShareButton url={`${DOMAIN}${shareLink}?referral_code=${referralCode}`} title={message} separator=" - ">
            <FaWhatsapp className="text-green-500 text-3xl cursor-pointer" />
          </WhatsappShareButton>
          <TelegramShareButton url={`${DOMAIN}${shareLink}?referral_code=${referralCode}`} title={message}>
            <FaTelegram className="text-blue-400 text-3xl cursor-pointer" />
          </TelegramShareButton>
          <a
            href={`https://www.instagram.com/?url=${DOMAIN}${shareLink}?referral_code=${referralCode}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-pink-500 text-3xl cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
