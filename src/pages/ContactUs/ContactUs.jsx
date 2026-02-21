import ContactBlock from '../../components/ScrollSection/ContactBlock'
import '../../components/ScrollSection/ScrollSection.css'
import Footer from '../../components/Footer/Footer'
import './ContactUs.css'

export default function ContactUs() {
    return (
        <div className="contact-page">
            {/* ContactBlock with bg image + form */}
            <div style={{ display: 'flex', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
                <ContactBlock />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}
