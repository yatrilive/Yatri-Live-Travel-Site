import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg">About</h3>
            <p className="mt-2 text-sm">
             We want to revolutionize the traveling and make easy to everyone by providing tailored solutions.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-lg">Contact</h3>
            <p className="mt-2 text-sm">📞 (+91) 7898194031</p>
            <p className="text-sm">✉️ svpandey398@gmail.com</p>
            <p className="text-sm">📍 Phagwara Punjab, India</p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg">Company</h3>
            <ul className="mt-2 text-sm space-y-1">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Packages</li>
              <li>Destination</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg">Resource</h3>
            <ul className="mt-2 text-sm space-y-1">
              <li>Press Info</li>
              <li>Customers</li>
              <li>Reviews</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm">
          <p>© 2025 yatrilive.com | All Rights Reserved</p>
          <p>We Accept: VISA | PayPal | Paytm | Upi</p>
          <p>
            <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
