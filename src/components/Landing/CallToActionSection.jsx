const CallToActionSection=()=>{
    return(
        <div className="bg-blue-500">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-exl font-extrabold tracking-tight text-white sm:text-4xl">
                <span className="block">Ready to get Started?</span>
                <span className="block text-blue-100"> Create your account today</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <button className="inline-flex item-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover::bg-blue-50 transition-colors duration-200">
                            Sign Up For Free.
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default CallToActionSection;