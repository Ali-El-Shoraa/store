import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function FooterSubscribe() {
  return (
    <div className="md:col-span-3 lg:col-span-1">
      <h4 className="text-lg font-semibold mb-4">
        Receive Offers & Discounts via E-mail:
      </h4>
      <div className="bg-gray-800 p-6 rounded-lg">
        <p className="text-gray-300 mb-2">
          <span className="font-medium text-white">
            Join 60.000+ Subscribers
          </span>{" "}
          and get a new discount coupon on every Saturday.
        </p>

        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-2">newsletter</label>
          <form className="flex gap-2">
            <Input
              type="email"
              placeholder="Your email address..."
              className="bg-gray-700 border-gray-600 text-white"
            />
            <Button
              type="submit"
              className="bg-brand-secoundry hover:bg-brand-secoundry/90 cursor-pointer"
            >
              Subscribe !
            </Button>
          </form>
        </div>

        <p className="text-xs text-gray-400">
          By clicking on the subscribe button, you are agreeing to the
          processing of your information within the scope of our Private Policy.
        </p>
      </div>
    </div>
  );
}
