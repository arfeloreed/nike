// variables
import { services } from "../variables";
//components
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </div>
  );
};

export default Services;
