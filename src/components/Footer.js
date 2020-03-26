import React from "react";

const Footer = () => {
  const getCurrentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col items-center p-6">
      <div>contact@miko-aro.com</div>
      <div class="copyright">© {getCurrentYear}</div>
    </div>
  );
};

export default Footer;
