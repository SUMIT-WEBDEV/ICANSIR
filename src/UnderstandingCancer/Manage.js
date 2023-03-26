import React, { useLayoutEffect } from 'react'
import "./Manage.css"

function Manage() {
    useLayoutEffect(() => {
    window.scrollTo(0, 0)
    },[]);

    return (
        <div className="manage">

            <div className="manage__header">
                <h1>Managing and Treating Cancer</h1>
                <p>Your treatment depends on the type of cancer, where your cancer is, how big it is, whether it has spread, and your general health. The general types of treatments include: surgery, chemotherapy, radiotherapy, hormone therapy, immunotherapy, and gene therapy.</p>
            </div>

            <div>
                <h2>Surgery</h2>
                <p>If a cancer has not metastasised (spread), surgery can remove the entire cancer which may completely cure the disease. Often, this is effective in removing the prostate or a breast or testicle.</p>

                <h2>Chemotherapy</h2>
                <p>Chemotherapy uses chemicals to interfere with the way cells divide - damaging of DNA - so that cancer cells will destroy themselves. These treatments target any rapidly dividing cells (not necessarily just cancer cells), but normal cells usually can recover from any chemical-induced damage while cancer cells cannot. Chemotherapy is generally used to treat cancer that has spread or metastasised because the medicines travel throughout the entire body. It is a necessary treatment for some forms of leukaemia and lymphoma.</p>

                <h2>Immunotherapy</h2>
                <p>Immunotherapy uses the body's own immune system to fight the cancer tumour. Immunotherapy may treat the whole body by giving an agent that can shrink tumours.</p>

                <h2>Hormone Therapy</h2>
                <p>Several cancers have been linked to some types of hormones, including breast and prostate cancer. Hormone therapy works to change hormone production in the body so that cancer cells stop growing or are killed completely.</p>

                <h2>Gene Therapy</h2>
                <p>The goal of gene therapy is to replace damaged genes with ones that work to address a root cause of cancer: damage to DNA. Other gene-based therapies focus on further damaging cancer cell DNA to the point where the cell destroys themselves. However, gene therapy is new and has not yet resulted in any successful treatments.</p>
            </div>

        </div>
    )
}

export default Manage
