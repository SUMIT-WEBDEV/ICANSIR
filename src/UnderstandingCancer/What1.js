import React, { useLayoutEffect } from 'react'
import Category from './Category'
import "./What1.css"

function What1() {

    useLayoutEffect(() => {
    window.scrollTo(0, 0)
    },[]);

    return (
        <div className="what1">

            <div className="right">
          
            <div className="what1__what">
            <h2>What is Cancer?</h2>
                <p>Cancer is a disease which occurs when changes in a group of normal cells within the body lead to an uncontrolled, abnormal growth forming a lump called a tumour; this is true of all cancers except leukaemia (cancer of the blood). If left untreated, tumours can grow and spread into the surrounding normal tissue, or to other parts of the body via the bloodstream and lymphatic systems, and can affect the digestive, nervous and circulatory systems or release hormones that may affect body function.</p>
            </div>
    
            <div className="what1__types">
                <h2>Types of Tumours</h2>
                <h4>Cancer tumours can be divided into three groups: benign, malignant or precancerous</h4>

                <h3>Benign Tumours</h3>
                <p>Benign tumours are not cancerous and rarely threaten life. They tend to grow quite slowly, do not spread to other parts of the body and are usually made up of cells quite similar to normal or healthy cells. They will only cause a problem if they grow very large, becoming uncomfortable or press on other organs - for example a brain tumour inside the skull.</p>

                <h3>Malignant Tumours</h3>
                <p>Malignant tumours are faster growing than benign tumours and have the ability to spread and destroy neighbouring tissue. Cells of malignant tumours can break off from the main (primary) tumour and spread to other parts of the body through a process known as metastasis. Upon invading healthy tissue at the new site they continue to divide and grow. These secondary sites are known as metastases and the condition is referred to as metastatic cancer.</p>

                <h3>Precancerous (or premalignant) Tumours</h3>
                <p>Precancerous (or premalignant) describes the condition involving abnormal cells which may (or is likely to) develop into cancer.</p>

            </div>
            </div>
        </div>
    )
}

export default What1
