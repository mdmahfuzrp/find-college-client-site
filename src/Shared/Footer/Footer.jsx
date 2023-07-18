import logo from '../../assets/logo.png'
const Footer = () => {
    return (
        <footer className="footer mt-10 p-10 bg-[var(--opacity-color)] rounded-t-lg text-base-content">
            <div>
                <img className='w-[200px]' src={logo} alt="" />
                <p>House Hunter Ltd.<br />Providing reliable rent since 1992</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Rent House</a>
                <a className="link link-hover">Buy House</a>
                <a className="link link-hover">Rent Cars</a>
                <a className="link link-hover">Rent Plots</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;