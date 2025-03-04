import { Switch } from "@/components/ui/switch";

const Notifications = () => {
  return (
    <div className="border-l p-6">
      <h1 className="text-2xl font-bold pb-4">Notifications</h1>
      <div className="flex justify-between items-center py-6">
        <div>
          <h1 className="text-xl font-medium">Notifications</h1>
          <p>
            Manage alerts sent when you change account information, or when you
            have discounts or special offers.
          </p>
        </div>

        <Switch className="data-[state=checked]:bg-red-600 bg-gray-300 border-transparent" />
      </div>
      <div className="flex justify-between items-center py-6">
        <div>
          <h1 className="text-xl font-medium">Install Payment Notifications</h1>
          <p>Integrate Overpay payment notifications with your website</p>
        </div>

        <Switch className="data-[state=checked]:bg-red-600 bg-gray-300 border-transparent" />
      </div>
      <div className="flex justify-between items-center py-2">
        <div>
          <h1 className="text-xl font-medium">Successful Payments</h1>
          <p>Receive a notifications for every successfull payments.</p>
        </div>

        <Switch className="data-[state=checked]:bg-red-600 bg-gray-300 border-transparent" />
      </div>
      <div className="flex justify-between items-center py-6">
        <div>
          <h1 className="text-xl font-medium">Application Feed</h1>
          <p>
            Receive a notifications each time you collect a fee form a Account.
          </p>
        </div>

        <Switch className="data-[state=checked]:bg-red-600 bg-gray-300 border-transparent" />
      </div>
      <div className="flex justify-between items-center py-6">
        <div>
          <h1 className="text-xl font-medium">Payment Reviews</h1>
          <p>
            Receive a notifications if a payment is marked as elevated risk by
            Stripe or a custom rule
          </p>
        </div>

        <Switch className="data-[state=checked]:bg-red-600 bg-gray-300 border-transparent" />
      </div>
      <div className="flex justify-between items-center py-6">
        <div>
          <h1 className="text-xl font-medium">Invoice Mispayments</h1>
          <p>
            Receive a notifications if a customer sends an incorrect amount to
            pay their invoice
          </p>
        </div>

        <Switch className="data-[state=checked]:bg-red-600 bg-gray-300 border-transparent" />
      </div>
      <div className="flex justify-between items-center py-6">
        <div>
          <h1 className="text-xl font-medium">Bank Accounts</h1>
          <p>
            Receive a notifications for important changes to your bank accounts
            or for <br /> micro-deposit verifications related events
          </p>
        </div>

        <Switch className="data-[state=checked]:bg-red-600 bg-gray-300 border-transparent" />
      </div>
    </div>
  );
};

export default Notifications;
