import { useAuth } from "../store/auth";
import "./Service.css";

const Service = () => {
  const { services } = useAuth();

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>

      <div className="container grid grid-three-cols">
        {services && services.length > 0 ? (
          services.map((currElement, index) => {
            const { provider, price, service, description } = currElement;
            return (
              <div className="service-card" key={index}>
                <div className="card-img">
                  <img
                    src="/images/design.png"
                    alt="service info"
                    width="400"
                  />
                </div>
                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p>{provider}</p>
                    <p>{price}</p>
                  </div>
                  <h2>{service}</h2>
                  <p>{description}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p>No services available</p>
        )}
      </div>
    </section>
  );
};

export default Service;
