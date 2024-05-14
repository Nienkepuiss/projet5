import AboutBanner from "../Components/AboutBanner/AboutBanner"
import Collapse from "../Components/Collapse/Collapse"
import DataCollapse from "../../src/DataCollapse/DataCollapse"

function APropos (){
    return(
        <section className="APropos">
            <AboutBanner />
            {DataCollapse.map((apropos, index) => (
				<Collapse
					aproposTitle={apropos.title}
					aproposText={apropos.content}
					key={index}
                    aproposStyle="about-style"
				/>
			))}
        </section>
    )
}
export default APropos