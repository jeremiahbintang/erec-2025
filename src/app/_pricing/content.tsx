import Link from "next/link";
import styles from "./pricing.module.css";
import Image from "next/image";

export default function Content() {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.content}>
          {/* Pricing Info */}
          <div className={styles.pricing}>
            <div>
              <p className={styles.pricingHeader}>PRICING</p>
            </div>
            <div className={styles.feeInfo}>
              <div className={styles.normalFee}>
                {/* Early Bird Mobile */}
                {/* <div className={styles.earlyBirdFeeForMobile}>
                  <div className={styles.earlyBirdFeeDetails}>
                    <p className={styles.earlyBirdText}>ADULT</p>
                    <p className={styles.earlyBirdSmallText}>Early Bird</p>
                  </div>
                  <div
                    className={styles.priceContainer}
                    style={{ color: "#fff" }}
                  >
                    <p className={styles.eurText}>EUR</p>
                    <p className={styles.priceText}>185</p>
                  </div>
                </div> */}

                <div className={styles.ageContainer}>
                  <div className={styles.ageFeeDetails}>
                    <p className={styles.ageText}>ADULT</p>
                  </div>
                  <div className={styles.priceContainer}>
                    <p className={styles.eurText}>EUR</p>
                    <p className={styles.priceText}>205</p>
                  </div>
                </div>

                <div className={styles.ageContainer}>
                  <div className={styles.ageFeeDetails}>
                    <p className={styles.ageText}>11-17</p>
                    <p className={styles.ageSmallText}>YEARS OLD</p>
                  </div>
                  <div className={styles.priceContainer}>
                    <p className={styles.eurText}>EUR</p>
                    <p className={styles.priceText}>125</p>
                  </div>
                </div>

                <div className={styles.ageContainer}>
                  <div className={styles.ageFeeDetails}>
                    <p className={styles.ageText}>3-10</p>
                    <p className={styles.ageSmallText}>YEARS OLD</p>
                  </div>
                  <div className={styles.priceContainer}>
                    <p className={styles.eurText}>EUR</p>
                    <p className={styles.priceText}>100</p>
                  </div>
                </div>

                <div className={styles.ageContainer}>
                  <div className={styles.ageFeeDetails}>
                    <p className={styles.ageText}>0-2</p>
                    <p className={styles.ageSmallText}>YEARS OLD</p>
                  </div>
                  <div className={styles.priceContainer}>
                    <p className={styles.eurText}>EUR</p>
                    <p className={styles.priceText}>60</p>
                  </div>
                </div>
              </div>

              {/* Early Bird Desktop */}
              {/* <div className={styles.earlyBirdFeeForDesktop}>
                <div className={styles.earlyBirdFeeDetails}>
                  <p className={styles.earlyBirdText}>ADULT</p>
                  <p className={styles.earlyBirdSmallText}>Early Bird</p>
                </div>
                <div
                  className={styles.priceContainer}
                  style={{ color: "#fff" }}
                >
                  <p className={styles.eurText}>EUR</p>
                  <p className={styles.priceText}>185</p>
                </div>
              </div> */}

              <div className={styles.feeDescription}>
                <p className={styles.feeDescriptionText}>
                  The prices above include accommodation and meals. Towels are
                  available for an additional EUR 1.50.
                </p>
                <p className={styles.feeDescriptionText}>
                  Financial assistance is available. Please contact the people
                  in charge of registration at your local IREC Europe branch or
                  the contacts provided in this website if you are not attending
                  any of the branches.
                </p>
              </div>
            </div>
          </div>

          {/* Payment Instruction */}
          <div className={styles.paymentInstruction}>
            <div className={styles.paymentInstructionHeaderContainer}>
              <p className={styles.paymentInstructionHeader}>This is how</p>
              <p className={styles.paymentInstructionHeader}>
                the registration process is like
              </p>
            </div>
            <div className={styles.paymentStepsContainer}>
              <div className={styles.paymentSteps}>
                <Image
                  className={styles.paymentStepsIcon}
                  width={64}
                  height={64}
                  alt=""
                  src="/icons/fill-in-registration-icon.svg"
                />
                <p className={styles.paymentStepsHeader}>
                  Fill in registration form
                </p>
                <p className={styles.paymentStepsText}>
                  Provide your details as required in the online form. If you
                  are bringing your family, you can register all together.
                </p>
              </div>

              <div className={styles.paymentSteps}>
                <Image
                  className={styles.paymentStepsIcon}
                  width={64}
                  height={64}
                  alt=""
                  src="/icons/make-your-payment-icon.svg"
                />
                <p className={styles.paymentStepsHeader}>Make your payment</p>
                <p className={styles.paymentStepsText}>
                  Bank transfer detail is provided in the registration form as
                  well as the copy of your registration sent via email.
                </p>
              </div>

              <div className={styles.paymentSteps}>
                <Image
                  className={styles.paymentStepsIcon}
                  width={64}
                  height={64}
                  alt=""
                  src="/icons/wait-for-confirmation-icon.svg"
                />
                <p className={styles.paymentStepsHeader}>
                  Wait for confirmation
                </p>
                <p className={styles.paymentStepsText}>
                  You will receive a confirmation after 4 to 7 days. If you have
                  not received any confirmation after 7 days, please message
                  Heru +49 176 8254 3691.
                </p>
              </div>
            </div>
          </div>

          {/* Link to FAQs Page */}
          <div className={styles.linkContainer}>
            <div>
              <p className={styles.text}>Any questions in mind?</p>
            </div>

            <Link href="/faqs" className={styles.linkToFAQsContainer}>
              <p className={styles.linkToFAQs}>CHECK OUT OUR FAQS</p>
              <Image
                width={28}
                height={28}
                className={styles.arrowCircleRightIcon}
                alt="Arrow Circle Right"
                src="/icons/arrowCircleRight.svg"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
