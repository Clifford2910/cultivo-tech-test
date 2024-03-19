import Image from 'next/image'
import Clipboard from './clipboard.svg'
import HBannerSVG from './h_banner.svg'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerImage}>
          <Image src={HBannerSVG} alt='Banner' />
        </div>

        <div className={styles.itemContainer}>
          <div className={styles.column}>
            <div>
              <Image src={Clipboard} alt='Banner' />
            </div>
            <p className={styles.textSmall}>Next step</p>
            <p className={styles.textLarge}>Expert Report</p>
          </div>

          <div className={styles.column}>
            <div className={styles.textLarge}>
              <p className={styles.textSmall}>
                Please get in touch if you would like an expert report for this
                site. Benefits include:
              </p>
              <div>
                <p className={styles.textSmall}>
                  • Key insights from our expert team
                  <br />• An in-depth analysis of the site <br />•
                  Recommendations of next steps to take
                </p>
              </div>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>Get In Touch</button>
          </div>
        </div>
      </div>
    </main>
  )
}
