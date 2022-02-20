import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import "./faq.css"

const data = {
    title: "FAQ",
    rows: [
        {
            title: "What is a period?",
            content: `Periods or menstruation is a natural biological process in which blood and tissue from your uterus come out from your vagina. This usually happens once a month. The onset of menstrual periods in girls is the body’s way of preparing itself for a possible pregnancy. The ovaries are responsible for the release of the hormones, oestrogen, and progesterone. 
            These female hormones signal the building up of the uterine lining or endometrium that nurtures a fertilized egg. The same hormones signal the release of an egg from one of the ovaries during ovulation. 
            This egg travels through the fallopian tube and attaches to the uterine lining – ready for fertilization. In the absence of a sperm cell to fertilize the egg, the uterine lining breaks down and is shed by way of a period. This lining takes on an average of around 28 days to build up, break down, and eventually get shed. Most women experience a period cycle of anywhere between 21 to 35 days.`,
            close: () => {},
            expand: () => {},
            scrollIntoView: (option) => {}, // option values : https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters
        },
        {
            title: "What are the signs that I am approaching my periods?",
            content:
                `If your periods haven’t started then, periods generally start about two years after your breasts begin to develop. But there are other signs that can signal the arrival of your first period. Right around the same time, you will also notice the growth of hair in your pubic area and a mucus like vaginal discharge which can be clear, white, or even slightly cloudy yellowish in colour. These are both signs that your very first period is on its way.
                If you have started menstruating, then some signs of approaching periods that tend to stay across the course of life are

                You may see signs of Pre-Menstrual Syndrome
                You may feel bloated and gassy
                You may experience acne
                You may experience abdominal cramps
                You may have a headache`,
        },
        {
            title: "What is a period cycle?",
            content: `The period cycle or menstrual cycle is the time between the first days of your last and next period. For example, if your last period started on the 10th of January and you get your next period on the 8th of February, your menstrual cycle is the time between January 10 and February 08. It can be understood better in the following four stages:

            Your uterine lining thickens up over a period of about 28 days and begins to shed as your period starts. The first day of your period is considered to be the first day of your menstrual cycle.`,
        },
        {
            title: "Do periods hurt?",
            content: `Many women experience premenstrual syndrome or PMS during the weeks leading up to their period. This may be characterized by symptoms such as mood swings, acne, anxiety, bloating, feeling irritable or short tempered. You are also likely to experience period pain during the first couple of days of your period. It can range between substantial cramps in your lower abdomen or dull stomach pain during periods accompanied by an aching lower back.

            While pain during the period is normal, if cramps during period become unbearable and start to interfere with your day-to-day life, it is better to pay your doctor a visit for a thorough examination of the underlying cause.`,
        },
        {
            title: "How to reduce period pain?",
            content: `Period pain generally eases away as your period progresses but if period cramps are keeping you from going about your day as usual, you can try the following remedies:

            A hot water bag or a heated pain relief pad can make periods significantly less painful.
            Take over-the-counter pain medication.
            However, if taking pain medications does not help with menstrual cramps, it is advisable to pay your doctor a visit.`,
        },
    ],
};

const styles = {
    titleTextColor: '#80001C',
    titleTextSize: '40px',
    rowTitleColor: '#80001C',
    rowTitleTextSize: '20px',
    rowContentColor: '#1a1a1a',
    rowContentTextSize: '16px',
    rowContentPaddingTop: '10px',
    rowContentPaddingBottom: '10px',
    rowContentPaddingRight: '150px',
    arrowColor: "#80001C",
    transitionDuration: "1s",
    timingFunc: "ease"
};

const config = {
    animate: true,
    arrowIcon: "V",
}; 


export default function SampleFaqApp() {
    const [rows, setRowsOption] = useState(null);

    useEffect(() => {
        if (rows) {
            setTimeout(() => {
                rows[0].expand();
            }, 2500);

            setTimeout(() => {
                rows[0].close();
            }, 5000);

            setTimeout(() => {
                rows[0].scrollIntoView(true);
            }, 10000);
        }
    }, [rows]);
    return (
        <div>

            <div className="faq-style-wrapper">
                <Faq data={data} getRowOptions={setRowsOption} 
                styles={styles}
                config={config}/>
            </div>
        </div>
    );
}