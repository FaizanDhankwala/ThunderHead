const TestimonialsSection = ({ testimonials = [] }) => {
    return (
        <div className="py-20 bg-white overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Trusted By Professionals Worldwide
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
                        See what current users have to say about ThunderHead.
                    </p>
                </div>
                <div className="mt-16 grid gap-8 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-lg shadow-lg flex flex-col bg-white"
                        >
                            {/* User Info */}
                            <div className="flex items-center space-x-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                                </div>
                            </div>

                            {/* Star Rating */}
                            <div className="flex mt-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-blue-900' : 'text-blue-900'}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.945a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.945c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.945a1 1 0 00-.364-1.118L2.975 9.372c-.784-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.945z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="mt-6 text-gray-700 italic relative before:content-['“'] before:absolute before:-left-2 before:text-4xl before:text-gray-200 after:content-['”'] after:absolute after:-right-2 after:text-4xl after:text-gray-200">
                                {testimonial.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;
