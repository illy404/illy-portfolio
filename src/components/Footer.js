import { Container, Nav } from "react-bootstrap";
import behanceapp from "../assets/img/behanceapp_footer.png"
import emailapp from "../assets/img/emailapp_footer.png"
import instagramapp from "../assets/img/instagramapp_footer.png"
import linkedinapp from "../assets/img/linkedinapp_footer.png"

export const Footer = () => {
  return (
    <footer className="footer py-5" id="contact">
			<Container>
				<h1 className="fw-bold text-center color-pink">Let’s work together!</h1>
				<div className="d-flex justify-content-center mt-4">
					{/* Flex item 1 */}
					<div className="text-center mx-3 social-icon">
						<Nav.Link href="https://www.behance.net/illys3" className="text-decoration-none" target="blank">
							<img src={behanceapp} alt="behanceapp" className="mb-2 img-fluid folder-icon-img"/>
						</Nav.Link>
					</div>

					{/* Flex item 2 */}
					<div className="text-center mx-3 social-icon">
						<Nav.Link href="mailto:illysuryadinata@gmail.com" className="text-decoration-none">
							<img src={emailapp} alt="emailapp" className="mb-2 img-fluid folder-icon-img"/>
						</Nav.Link>
					</div>

					{/* Flex item 3 */}
					<div className="text-center mx-3 social-icon">
						<Nav.Link href="https://www.instagram.com/illysuryadinata/" className="text-decoration-none" target="blank">
							<img src={instagramapp} alt="igapp" className="mb-2 img-fluid folder-icon-img"/>
						</Nav.Link>
					</div>

					{/* Flex item 4 */}
					<div className="text-center mx-3 social-icon">
						<Nav.Link href="https://www.linkedin.com/in/illysuryadinata/" className="text-decoration-none" target="blank">
							<img src={linkedinapp} alt="linkedinapp" className="mb-2 img-fluid folder-icon-img"/>
						</Nav.Link>
					</div>
				</div>
			</Container>
		</footer>
  )
}