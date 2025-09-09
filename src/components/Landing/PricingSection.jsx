const PricingSection = ({ pricingPlans }) => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Pricing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Choose the plan that works for you.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-lg shadow-lg overflow-hidden ${
                plan.highlighted
                  ? "border-2 border-blue-500 transform scale-105"
                  : "border border-gray-200"
              }`}
            >
              <div
                className={`px-6 py-8 ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-blue-50 to-white"
                    : "bg-white"
                }`}
              >
                <h3 className="text-2xl font-medium text-gray-900">
                  {plan.name}
                </h3>

                <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
                  {plan.price}
                </p>

                <ul className="mt-6 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full flex items-center justify-center px-4 py-2 rounded-lg text-white font-medium ${
                    plan.highlighted
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-800 hover:bg-gray-900"
                  }`}
                >
                  {(plan.name === "Pro" || plan.name === "Enterprise") && (
                    <svg
                      className="w-5 h-5 mr-2 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 16l-3-5 4-4 5 5 5-5 4 4-3 5h-12z" />
                    </svg>
                  )}
                  {plan.name === "Basic"
                    ? "Get Started"
                    : plan.name === "Pro"
                    ? "Go Pro"
                    : "Go Enterprise"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
