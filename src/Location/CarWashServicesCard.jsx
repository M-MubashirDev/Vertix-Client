// import { FaCheckCircle } from "react-icons/fa"; // Reserved for future use
import { FaArrowRight } from "react-icons/fa"; // Importing an arrow icon
import { FaShieldAlt } from "react-icons/fa"; // Importing a shield icon

const CarWashServicesCard = ({ service }) => {
  return (
    <div key={service._id} className="group relative w-80">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 p-[1px] shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/25">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500 to-blue-500 opacity-20"></div>

        <div className="relative rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 p-6">
          <div className="relative">
            <h3 className="text-sm font-medium uppercase tracking-wider text-cyan-500">
              {service.title}
            </h3>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-white">
                ${service.price}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-400">{service.description}</p>
          </div>

          {/* Placeholder for tick mark UI */}
          {/* 
          <div className="flex items-start gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10">
              <FaCheckCircle className="h-4 w-4 text-cyan-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Some feature</p>
              <p className="text-xs text-slate-400">Details of the feature</p>
            </div>
          </div>
          */}

          <div className="relative mt-8">
            <button className="group/btn relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 p-px font-semibold text-white shadow-[0_1000px_0_0_hsl(0_0%_100%_/_0%)_inset] transition-colors hover:shadow-[0_1000px_0_0_hsl(0_0%_100%_/_2%)_inset]">
              <div className="relative rounded-xl bg-slate-950/50 px-4 py-3 transition-colors group-hover/btn:bg-transparent">
                <span className="relative flex items-center justify-center gap-2">
                  Get Started
                  <FaArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </span>
              </div>
            </button>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            <FaShieldAlt className="h-4 w-4 text-slate-400" />
            <span className="text-xs font-medium text-slate-400">
              30-day money-back guarantee
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarWashServicesCard;