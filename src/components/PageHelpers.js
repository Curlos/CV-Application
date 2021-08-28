const PageHelpers = ({ generatePDF, loadExample, resetInformation }) => {
  return (
    <div className="pageHelpers">
      <button className="generatePDF" onClick={generatePDF}>Generate PDF</button>
      <button className="loadExample" onClick={loadExample}>Load Example</button>
      <button className="reset" onClick={resetInformation}>Reset</button>
    </div>
  )
}

export default PageHelpers