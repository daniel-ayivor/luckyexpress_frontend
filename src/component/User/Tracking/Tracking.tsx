
const Tracking = () => {
  return (
    <div>
        <div className="flex  py-20">
  <div className="border-white/20 relative mx-auto my-5 w-full max-w-4xl rounded-lg border bg-gradient-to-b from-cyan-500 to-indigo-600 shadow-md">
   
    <div className="p-8 md:p-12 lg:px-16">
      <div className="max-w-lg">
        <h2 className="text-xl font-bold text-white md:text-2xl">Input your tracking code to trace your goods</h2>
      </div>

      <div className="mt-8 max-w-xl">
        <form action="#" className="sm:flex sm:gap-4">
          <div className="sm:flex-1">
        

            <input type="text" placeholder="Input tracking code" className="w-full rounded-md border-indigo-200 bg-white p-3 text-gray-800 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-indigo-200" />
          </div>

          <button type="submit" className="group mt-4 flex w-full items-center justify-center rounded-md bg-cyan-400 px-5 py-3 text-white transition sm:mt-0 sm:w-auto focus:outline-none focus:ring focus:ring-indigo-200">
            <span className="text-sm font-medium">Track It </span>

         
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Tracking