import ExplanationImg1 from "../../3-Assets/Pictures/explanation-img-1.png";
import ExplanationImg2 from "../../3-Assets/Pictures/explanation-img-2.png";
import DAppIcon1 from "../../3-Assets/Pictures/app-icons/d-app-icon-1.svg";
import DAppIcon5 from "../../3-Assets/Pictures/app-icons/d-app-icon-5.svg";
const ExplanationSection = () => {
  return (
    <div className="background-widescreen-fixer-explanation">
      <section className="section-max-width desktop-only-block explanation-padding">
        <div className="explanation-grid">
          <div className="exp-box-item-1">
            <h2>Make your money transfer simple and clear</h2>
            <ul>
              <li>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0003 1.66669C5.40533 1.66669 1.66699 5.40502 1.66699 10C1.66699 14.595 5.40533 18.3334 10.0003 18.3334C14.5953 18.3334 18.3337 14.595 18.3337 10C18.3337 5.40502 14.5953 1.66669 10.0003 1.66669ZM10.0003 16.6667C6.32449 16.6667 3.33366 13.6759 3.33366 10C3.33366 6.32419 6.32449 3.33335 10.0003 3.33335C13.6762 3.33335 16.667 6.32419 16.667 10C16.667 13.6759 13.6762 16.6667 10.0003 16.6667Z"
                    fill="#6366F1"
                  />
                  <path
                    d="M8.33273 11.3225L6.4169 9.40999L5.24023 10.59L8.3344 13.6775L13.9227 8.08916L12.7444 6.91083L8.33273 11.3225Z"
                    fill="#6366F1"
                  />
                </svg>
                Banking transactions are free for you
              </li>
              <li>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0003 1.66669C5.40533 1.66669 1.66699 5.40502 1.66699 10C1.66699 14.595 5.40533 18.3334 10.0003 18.3334C14.5953 18.3334 18.3337 14.595 18.3337 10C18.3337 5.40502 14.5953 1.66669 10.0003 1.66669ZM10.0003 16.6667C6.32449 16.6667 3.33366 13.6759 3.33366 10C3.33366 6.32419 6.32449 3.33335 10.0003 3.33335C13.6762 3.33335 16.667 6.32419 16.667 10C16.667 13.6759 13.6762 16.6667 10.0003 16.6667Z"
                    fill="#6366F1"
                  />
                  <path
                    d="M8.33273 11.3225L6.4169 9.40999L5.24023 10.59L8.3344 13.6775L13.9227 8.08916L12.7444 6.91083L8.33273 11.3225Z"
                    fill="#6366F1"
                  />
                </svg>
                No monthly cash commission
              </li>
              <li>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0003 1.66669C5.40533 1.66669 1.66699 5.40502 1.66699 10C1.66699 14.595 5.40533 18.3334 10.0003 18.3334C14.5953 18.3334 18.3337 14.595 18.3337 10C18.3337 5.40502 14.5953 1.66669 10.0003 1.66669ZM10.0003 16.6667C6.32449 16.6667 3.33366 13.6759 3.33366 10C3.33366 6.32419 6.32449 3.33335 10.0003 3.33335C13.6762 3.33335 16.667 6.32419 16.667 10C16.667 13.6759 13.6762 16.6667 10.0003 16.6667Z"
                    fill="#6366F1"
                  />
                  <path
                    d="M8.33273 11.3225L6.4169 9.40999L5.24023 10.59L8.3344 13.6775L13.9227 8.08916L12.7444 6.91083L8.33273 11.3225Z"
                    fill="#6366F1"
                  />
                </svg>
                Manage payments and transactions online
              </li>
            </ul>
            <button aria-label="Simple money transfer">
              Learn more
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.41083 14.4108L10.5892 15.5892L16.1783 9.99999L10.5892 4.41083L9.41083 5.58916L12.9883 9.16666H5V10.8333H12.9883L9.41083 14.4108Z"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>
          <img id="exp-img-item-2" src={ExplanationImg1} />
          <img id="exp-img--item-3" src={ExplanationImg2} />
          <div className="exp-box-item-4">
            <h2>Receive payment from international bank details</h2>
            <div className="flex-row">
              {/* <!--Flex item 1--> */}
              <div className="app-features-grid-item no-shadow">
                <img src={DAppIcon1} />
                <div>
                  <p>
                    Manage your payments online. Mollis congue egestas egestas
                    fermentum fames.
                  </p>
                </div>
              </div>
              {/* <!--Flex item 2--> */}
              <div className="app-features-grid-item no-shadow">
                <img className="img-2" src={DAppIcon5} />
                <div>
                  <p>
                    A elementur and imperdiet enim, pretium etiam facilisi
                    aenean quam mauris.
                  </p>
                </div>
              </div>
            </div>
            <button aria-label="Receive payments">
              Learn more
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.41083 14.4108L10.5892 15.5892L16.1783 9.99999L10.5892 4.41083L9.41083 5.58916L12.9883 9.16666H5V10.8333H12.9883L9.41083 14.4108Z"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ExplanationSection;
