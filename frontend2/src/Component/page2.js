import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory
import '/home/nayan/Desktop/Molicule/frontend2/src/Component/page2.css';
import Home from './Home';
import { Link } from 'react-router-dom';

const Second_page = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const [loading, setLoading] = useState(false);

    const handleGenerateClick = () => {
        setLoading(true);
        setTimeout(() => {
            navigate('/res');
            setLoading(false);
        }, 5000); // 30 seconds delay
    };
    return (
        <div className='divone'>
        {loading && (
            <div className="loader-container">
                <div className="spinner"></div>
                <h1 style={{color:"white",animation : "blink 1s infinite"}}>Generating the molecule...</h1>
            </div>
        )}
        <div className={`divmain ${loading ? 'blur' : ''}`}>
                <div className='divtwo'>
                    <nav className="navbar navbar-expand-lg w-100" style={{ backgroundColor: "transparent", border: "none" }}>
                        <a className="navbar-brand" href="#" style={{ color: "yellow", fontSize: 20 }}>
                            Molecule
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
                        >
                            <span
                                className="navbar-toggler-icon"
                                style={{
                                    backgroundImage:
                                        "url('data:image/svg+xml;charset=utf8,%3Csvg viewBox=0 0 30 30 xmlns=http://www.w3.org/2000/svg%3E%3Cpath stroke=rgba(255, 255, 255, 0.5) stroke-width=2 stroke-linecap=round stroke-miterlimit=10 d=M4 7h22M4 15h22M4 23h22/%3E%3C/svg%3E')",
                                }}
                            ></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/" style={{ color: "white" }}>
                                        Home <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{ color: "yellow" }}>
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{ color: "yellow" }}>
                                        Contact
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" tabIndex="-1" style={{ color: "white" }}>
                                        TryMind
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div className='div2.1'>
                        <div className='select-box-container'>
                            <select className='custom-select'>
                                <option value="" disabled selected>Select a disease...</option>
                                <option value="option1">Malaria</option>
                                <option value="option2">Alzheimer's</option>
                                <option value="option3">HIV (human immunodeficiency virus)</option>
                                <option value="option3">Covid-19</option>
                            </select>
                            <button className='generate-button' onClick={handleGenerateClick}>Generate</button>
                        </div>
                    </div>
                </div>
                <div className='divthree'>
                    {/* First Inner Div */}
                    <div className='inner-div'>
                        <div className='image-container'>
                            <img src="https://s7d1.scene7.com/is/image/CENODS/09808-scicon3-spike?$responsive$&wid=300&qlt=90,0&resMode=sharp2" alt='Placeholder' className='image' />
                        </div>
                        <div className='details-container'>
                            <h2>Covid-19 :-</h2>
                            <p>Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.

                                Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment. However, some will become seriously ill and require medical attention. Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness. Anyone can get sick with COVID-19 and become seriously ill or die at any age.

                                The best way to prevent and slow down transmission is to be well informed about the disease and how the virus spreads. Protect yourself and others from infection by staying at least 1 metre apart from others, wearing a properly fitted mask, and washing your hands or using an alcohol-based rub frequently. Get vaccinated when it’s your turn and follow local guidance.
                                The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe. These particles range from larger respiratory droplets to smaller aerosols. It is important to practice respiratory etiquette, for example by coughing into a flexed elbow, and to stay home and self-isolate until you recover if you feel unwell.
                                The Covid-19 pandemic has been a deadly pandemic that has affected the whole world. It was a viral infection that affected almost everyone in some way or the other. However, the effects have been felt differently depending on various factors. As it is a virus, it will change with time, and different variants might keep coming. The virus has affected the lifestyle of human beings

                            </p>
                        </div>
                    </div>

                    {/* Second Inner Div */}
                    <div className='inner-div'>
                        <div className='image-container'>
                            <img src='https://i.guim.co.uk/img/media/9be88a8fbd44edbd1d57a656afb9105b3d1199d2/0_0_2000_1200/master/2000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=8402e5090eb467e24338915b022b4bb0' alt='Placeholder' className='image' />
                        </div>
                        <div className='details-container'>
                            <h2>Malaria :-</h2>
                            <p>Malaria is a life-threatening disease primarily found in tropical countries. It is both preventable and curable. However, without prompt diagnosis and effective treatment, a case of uncomplicated malaria can progress to a severe form of the disease, which is often fatal without treatment.

                                Malaria is not contagious and cannot spread from one person to another; the disease is transmitted through the bites of female Anopheles mosquitoes.  Five species of parasites can cause malaria in humans and 2 of these species – Plasmodium falciparum and Plasmodium vivax – pose the greatest threat. There are over 400 different species of Anopheles mosquitoes and around 40, known as vector species, can transmit the disease.

                                This risk of infection is higher in some areas than others depending on multiple factors, including the type of local mosquitoes. It may also vary according to the season, the risk being highest during the rainy season in tropical countries.
                                Nearly half of the world’s population is at risk of malaria. In 2022, an estimated 249 million people contracted malaria in 85 countries. That same year, the disease claimed approximately 608 000 lives.

                                Some people are more susceptible to developing severe malaria than others. Infants and children under 5 years of age, pregnant women and patients with HIV/AIDS are at particular risk. Other vulnerable groups include people entering areas with intense malaria transmission who have not acquired partial immunity from long exposure to the disease, or who are not taking chemopreventive therapies, such as migrants, mobile populations and travellers.

                            </p>
                        </div>
                    </div>

                    {/* Third Inner Div */}
                    <div className='inner-div'>
                        <div className='image-container'>
                            <img src='https://cdn.rcsb.org/images/structures/2aox_assembly-1.jpeg' alt='Placeholder' className='image' />
                        </div>
                        <div className='details-container'>
                            <h2>Alzheimer's -:</h2>
                            <p>It’s a disease that robs you of your memory. At first, you may have a hard time remembering recent events, though you might easily recall things that happened years ago.

                                People with Alzheimer's might forget loved ones. You might forget how to dress yourself, feed yourself, and use the toilet.

                                The disease makes your brain tissue break down over time. It usually happens to people over age 65.

                                People can live with Alzheimer's disease for just a few years or for a few decades. But more often, people live with it for about 9 years. About 1 in 8 people ages 65 and over have the disease. Women are more likely to have it than men.

                                Dementia isn’t a specific disease. It’s a general term that describes conditions with symptoms that include problems with memory, thinking skills, and behavior.

                                Alzheimer’s is the most common type of dementia. It’s a specific disease that causes dementia. There are other types of dementia that aren’t Alzheimer’s disease.

                                It can be hard to notice symptoms consistently when someone is in early-stage Alzheimer’s. Only the people closest to the person with the disease may be able to tell a difference in behavior.

                                You’ll likely still be able to drive and take part in social activities at this stage, but you may have trouble remembering details, doing certain tasks, planning or organizing, and you may lose things.
                            </p>
                        </div>
                    </div>

                    {/* Fourth Inner Div */}
                    <div className='inner-div'>
                        <div className='image-container'>
                            <img src='https://www.nih.gov/sites/default/files/styles/floated_media_breakpoint-large/public/news-events/research-matters/2014/20141103-HIV.jpg?itok=NcHFG5W_&timestamp=1431544050' alt='Placeholder' className='image' />
                        </div>
                        <div className='details-container'>
                            <h2>HIV & AIDS -:</h2>
                            <p>We believe we can end the AIDS epidemic. Between 2010 and 2019, there had been a 23% decline in new HIV infections globally. More people are getting treatment than ever before. By keeping the focus on the needs and rights of key populations, we can prevent new HIV infections and ensure those living with AIDS are not left behind. This is what Pathfinder does.

                                Without addressing the problems caused by the HIV virus no real progress can be made. In previous years our projects included funding for voluntary testing and counselling, through an HIV and AIDS support group at Mukuni Health Centre. However, peer education for HIV and AIDS prevention is proving to be far more effective. School leavers have received extesive training to perform workshops in schools and communities. We have sponsored some 500 AIDS orphans in education, empowering them with knowledge to avoid the spread of HIV. We provide assistance for HIV mothers and orphans and funding for treatment for patients suffering from this debilitating disease.

                                The HIV and AIDS support group, made up entirely of volunteers, work tirelessly to sensitise the communities, help to remove the stigma and offer voluntary testing and counselling. The Butterfly Tree supports these projects in order to reduce the number of new cases. In Zambia one in six adults have HIV and in the Livingstone area, 27% of the population are living with HIV. There are also many children who have been tested positive. Every family is infected or affected by this devastating disease. Our aim is to spread awareness through education, particularly targeting school children, who can make the change.



                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Second_page;
