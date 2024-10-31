import Accordion from "../../components/Accordion";

const QaSection = () => {
  return (
    <div className="background-widescreen-fixer-qa-to-footer">
      <section className="section-max-width qa-padding">
        <div className="qa-grid">
          <div className="qa-flexbox">
            <div className="qa-top-text-box">
              <h2>Any questions? Check out the FAQs</h2>
              <p>Still have unanswered questions and need to get in touch?</p>
            </div>
            {/* <!--Contact on desktop only--> */}
            <div className="contact-tablet-wrapper contact-desktop-grid-placement desktop-only">
              <div className="contact-left-side ">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_20005129_567)">
                    <path
                      d="M21.2871 18.5226C20.3724 17.6194 19.2304 17.6194 18.3214 18.5226C17.6281 19.2101 16.9347 19.8976 16.253 20.5968C16.0666 20.7891 15.9092 20.8299 15.682 20.7017C15.2334 20.457 14.7556 20.2589 14.3244 19.9908C12.3143 18.7265 10.6304 17.1009 9.13881 15.2714C8.39885 14.3624 7.74045 13.3894 7.28015 12.294C7.18693 12.0726 7.20441 11.9269 7.38503 11.7463C8.07839 11.0763 8.75426 10.3887 9.43597 9.70119C10.3857 8.74564 10.3857 7.62695 9.43014 6.66557C8.88827 6.11788 8.34641 5.58183 7.80454 5.03414C7.24519 4.47479 6.69167 3.90962 6.1265 3.3561C5.21173 2.46464 4.06973 2.46464 3.16079 3.36193C2.46161 4.04946 1.79156 4.75447 1.08072 5.43034C0.422322 6.05378 0.09021 6.81706 0.0202916 7.70852C-0.0904125 9.15932 0.265006 10.5286 0.766088 11.8628C1.79156 14.6246 3.35307 17.0776 5.24669 19.3266C7.80454 22.3681 10.8576 24.7744 14.4293 26.5107C16.0374 27.2915 17.7038 27.8916 19.5159 27.9907C20.7627 28.0606 21.8465 27.746 22.7146 26.7729C23.3089 26.1087 23.979 25.5027 24.6083 24.8676C25.5405 23.9237 25.5463 22.7818 24.6199 21.8495C23.5129 20.7366 22.4 19.6296 21.2871 18.5226Z"
                      fill="#6366F1"
                    />
                    <path
                      d="M20.1744 13.8788L22.3243 13.5118C21.9864 11.5366 21.0542 9.74782 19.6383 8.32615C18.1409 6.82873 16.2473 5.88483 14.1614 5.59351L13.8584 7.75515C15.4723 7.98238 16.9406 8.7107 18.1001 9.87018C19.1955 10.9656 19.9122 12.3523 20.1744 13.8788Z"
                      fill="#6366F1"
                    />
                    <path
                      d="M23.5359 4.53304C21.0538 2.05094 17.9133 0.483602 14.4465 0L14.1436 2.16164C17.1384 2.58115 19.8536 3.93874 21.9977 6.07707C24.0312 8.11053 25.3655 10.68 25.8491 13.5059L27.999 13.1388C27.4339 9.86432 25.8898 6.89279 23.5359 4.53304Z"
                      fill="#6366F1"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_20005129_567">
                      <rect width="28" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Still have questions?</p>
                <button>
                  Contact us
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.41083 14.4108L10.5892 15.5892L16.1783 9.99999L10.5892 4.41083L9.41083 5.58916L12.9883 9.16666H5V10.8333H12.9883L9.41083 14.4108Z"
                      fill="#6366F1"
                    />
                  </svg>
                </button>
              </div>
              <div className="contact-right-side">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0547 1C21.7443 1 28 6.5195 28 13.3047C28 16.171 26.8657 18.9483 24.8013 21.1497C24.3927 22.8344 24.8886 24.6192 26.1191 25.8497C26.6336 26.3642 26.2697 27.25 25.5391 27.25C23.2015 27.25 20.948 26.3344 19.2738 24.7194C17.6171 25.3106 15.8644 25.6094 14.0547 25.6094C6.36508 25.6094 0 20.0899 0 13.3047C0 6.5195 6.36508 1 14.0547 1ZM20.5078 15.7656C21.8648 15.7656 22.9688 14.6617 22.9688 13.3047C22.9688 11.9477 21.8648 10.8438 20.5078 10.8438C19.1508 10.8438 18.0469 11.9477 18.0469 13.3047C18.0469 14.6617 19.1508 15.7656 20.5078 15.7656ZM13.9453 15.7656C15.3023 15.7656 16.4062 14.6617 16.4062 13.3047C16.4062 11.9477 15.3023 10.8438 13.9453 10.8438C12.5883 10.8438 11.4844 11.9477 11.4844 13.3047C11.4844 14.6617 12.5883 15.7656 13.9453 15.7656ZM7.38281 15.7656C8.73983 15.7656 9.84375 14.6617 9.84375 13.3047C9.84375 11.9477 8.73983 10.8438 7.38281 10.8438C6.0258 10.8438 4.92188 11.9477 4.92188 13.3047C4.92188 14.6617 6.0258 15.7656 7.38281 15.7656Z"
                    fill="#22C55E"
                  />
                </svg>
                <p>Don&apos;t like phone calls?</p>
                <button>
                  Contact us
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.41083 14.4108L10.5892 15.5892L16.1783 9.99999L10.5892 4.41083L9.41083 5.58916L12.9883 9.16666H5V10.8333H12.9883L9.41083 14.4108Z"
                      fill="#22C55E"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <Accordion />
          <div style={{ display: "none" }} className="qa-content-box"></div>
        </div>
      </section>
    </div>
  );
};

export default QaSection;
