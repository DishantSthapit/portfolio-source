import React from 'react';
import { Document,Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import NavBar from '../components/NavBar/NavBar';
import samplePDF from './../docs/Dishant-Resume.pdf';



class NavResume extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        numPages: null,
        pageNumber: 1,
      };
    }

    onDocumentLoadSuccess = (document) => {
        const { numPages } = document;
        this.setState({
          numPages,
          pageNumber: 1,
        });
      };
    
    changePage = offset => this.setState(prevState => ({
    pageNumber: prevState.pageNumber + offset,
    }));

    previousPage = () => this.changePage(-1);

    nextPage = () => this.changePage(1);
    
  
  render() {
    const { numPages, pageNumber } = this.state;
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    return (
        <div>
            <NavBar/>
            <div className="pdf-wrapper">
                <React.Fragment>
                    <div>
                        <p>
                            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                        </p>
                        <button
                            type="button"
                            disabled={pageNumber <= 1}
                            onClick={this.previousPage}
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            disabled={pageNumber >= numPages}
                            onClick={this.nextPage}
                        >
                            Next
                        </button>
                    </div>
                    <Document
                    file={samplePDF}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                    <Page pageNumber={pageNumber} />
                    </Document>
                </React.Fragment>
                 
            </div>
        </div>
    );
  }
}

export default NavResume;
