import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full h-full  py-8 p-20 mt-auto  ">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Social Links */}
        <SocialLinks />

        {/* Quick Links */}
        <QuickLinks />

        {/* Subscribe Form */}
        <SubscribeForm />
      </div>

      {/* Mobile Sidebar */}
      <div className="mobile-sidebar lg:hidden container mx-auto mt-8">
        <QuickLinks />
        <SubscribeForm />
      </div>

      {/* Footer Info */}
      <div className="container mx-auto text-center mt-8">
        <p className="text-sm text-gray-600">
          <a
            href="https://estudiopatagon.com/projects/zento-for-wordpress?ref=zento-wp-footer"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Zento
          </a>{" "}
          Theme by{" "}
          <a
            href="https://estudiopatagon.com?ref=zento-wp-footer"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            EstudioPatagon
          </a>{" "}
          <span className="dot">•</span> Powered by{" "}
          <a
            href="https://wordpress.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            WordPress
          </a>
        </p>
      </div>

      {/* Back to Top Button */}
      <span
        id="back-to-top"
        className="epcl-button visible fixed bottom-8 right-8 bg-gray-200 p-3 rounded-full shadow-lg"
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m12 5 6 6m-6-6-6 6m6-6v14"
          ></path>
        </svg>
      </span>
    </footer>
  );
}

function SocialLinks() {
  const socialLinks = [
    { name: "Twitter", href: "#", icon: <FaXTwitter></FaXTwitter> },
    {
      name: "Facebook",
      href: "#",
      icon: <IoLogoFacebook className="text-blue-500"></IoLogoFacebook>,
    },
    {
      name: "Instagram",
      href: "#",
      icon: <RiInstagramFill className="text-pink-400"></RiInstagramFill>,
    },
    {
      name: "Tiktok",
      href: "#",
      icon: <FaTiktok className="text-green-500"></FaTiktok>,
    },
  ];

  return (
    <section className="widget widget_epcl_social ">
      <h3 className="widget-title text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
        Follow me!
      </h3>
      <ul className="flex flex-col gap-4">
        {socialLinks.map((link, index) => (
          <li key={index} className="">
            <a
              href={link.href}
              target="_blank"
              rel="nofollow noopener"
              className="flex items-center justify-between gap-2 text-gray-600 hover:text-gray-800"
            >
              <span>
                Follow on <b>{link.name}</b>
              </span>
              <div>{link.icon} </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function QuickLinks() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Contact", href: "/contact" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <section className="widget widget_nav_menu ">
      <h3 className="widget-title text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
        Quick Links
      </h3>
      <ul className="flex flex-col gap-2">
        {quickLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-gray-600 hover:text-gray-800">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SubscribeForm() {
  return (
    <section className="widget widget_epcl_subscribe_form ">
      <div className="widget_text">
        <div className="textwidget">
          <div className="logo mb-4">
            <a href="https://ghost.estudiopatagon.com/zento-personal">
              <img
                src="https://ghost.estudiopatagon.com/zento-personal/content/images/2024/02/logo-zento-personal-1.svg"
                alt="Zento"
                width="170"
                height="60"
              />
            </a>
          </div>
          <p className="text-gray-600">
            Subscribe to our email newsletter and unlock access to{" "}
            <b>members-only</b> content and <b>exclusive updates.</b>
          </p>
        </div>
        <form
          className="subscribe-form mt-4 flex flex-col gap-4"
          action="https://eepurl.com/dxHIUz"
          method="POST"
          target="_blank"
        >
          <label
            className="text-gray-700"
            htmlFor="email-epcl_subscribe_form-2"
          >
            Let's connect
          </label>
          <div className="form-group flex items-center gap-2">
            <input
              type="email"
              id="email-epcl_subscribe_form-2"
              name="MERGE0"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              required
              placeholder="Enter your email address"
            />
            <button className=" text-nowrap p-3 px-6  rounded-lg" type="submit">
              Get Started
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
