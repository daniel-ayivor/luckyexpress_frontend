const Story = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-gray-100 rounded-full">
        Our Story
      </span>
      <h2 className="text-4xl font-bold mb-6">Delivering Excellence Since 2010</h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-8">
        We started with a simple mission: to revolutionize the way packages are delivered. 
        Today, we're proud to be one of the most trusted names in courier services, 
        combining cutting-edge technology with personalized care to ensure your 
        deliveries arrive safely and on time.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {["Innovation", "Reliability", "Speed"].map((value) => (
          <div key={value} className="p-6 rounded-lg bg-gray-50 hover-lift">
            <h3 className="text-xl font-semibold mb-2">{value}</h3>
            <p className="text-gray-600">
              Committed to excellence in every delivery
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Story;