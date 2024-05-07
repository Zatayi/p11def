import iconChat from '../../assets/img/icon-chat.webp'
import iconMoney from '../../assets/img/icon-money.webp'
import iconSecurity from '../../assets/img/icon-security.webp'
import Banner from '../../components/Banner/Banner'
import FeatureItem from '../../components/FeatureItem/FeatureItem'


function Home() {
   return (
      <div className='homepage'>
      <main>
          <Banner />
          <section className="features">
          <h2 className="sr-only">Features</h2>  
          <FeatureItem
               imgSrc={iconChat}
               alt="Chat Icon"
               title="You are our #1 priority"
               text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
         />
         <FeatureItem
                imgSrc={iconMoney}
                alt="Money Icon"
                title="More savings means higher rates"
                text="The more you save with us, the higher your interest rate will be!"
            />
            <FeatureItem
                imgSrc={iconSecurity}
                alt="Security Icon"
                title="Security you can trust"
                text="We use top of the line encryption to make sure your data and money is always safe."
            />          
          </section>
      </main>
  </div>
   )
}

export default Home