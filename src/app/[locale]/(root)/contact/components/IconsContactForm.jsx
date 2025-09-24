import { Clock, HeadphonesIcon, Shield } from "lucide-react";

export default function IconsContactForm() {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
      <div className="text-center">
        <div className="bg-blue-100 p-3 rounded-full inline-flex items-center justify-center mb-3">
          <HeadphonesIcon className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="font-semibold text-gray-900">24/7 Support</h3>
        <p className="text-sm text-gray-600 mt-1">
          Round-the-clock assistance for urgent inquiries
        </p>
      </div>
      <div className="text-center">
        <div className="bg-green-100 p-3 rounded-full inline-flex items-center justify-center mb-3">
          <Clock className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="font-semibold text-gray-900">Quick Response</h3>
        <p className="text-sm text-gray-600 mt-1">
          We typically respond within 2 business hours
        </p>
      </div>
      <div className="text-center">
        <div className="bg-purple-100 p-3 rounded-full inline-flex items-center justify-center mb-3">
          <Shield className="h-6 w-6 text-purple-600" />
        </div>
        <h3 className="font-semibold text-gray-900">Secure & Private</h3>
        <p className="text-sm text-gray-600 mt-1">
          Your information is encrypted and secure
        </p>
      </div>
    </div>
  );
}
