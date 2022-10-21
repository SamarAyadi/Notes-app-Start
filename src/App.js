import './App.css';

function App() {
  const getAddNote = () => {
    return (
      <div>
        <h2>Add new note</h2>
        <div>
          <input
            type="text"
            name="title"
            className="form-input mb-30"
            placeholder="Title"
            value=""
          />

          <textarea
            rows="10"
            name="content"
            className="form-input"
            placeholder="Text"
          />

          <a href="#" className="button green">
            SAVE
          </a>
        </div>
      </div>
    );
  };

  const getPreview = () => {
    return (
      <div>
        <div className="note-operations">
          <a href="#">
            <i className="fa fa-pencil-alt" />
          </a>
          <a href="#">
            <i className="fa fa-trash" />
          </a>
        </div>
        <div>
         <h2>Title of experimental note</h2>
         <p>Text Note Test</p>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <div className="notes-section">
        <ul className="notes-list">
           <li className="note-item">Note #1</li>
           <li className="note-item">Note #2</li>
           <li className="note-item">Note #3</li>
           <li className="note-item">Note #4</li>
        </ul>
        <button className="add-btn">+</button>
      </div>
      <div className="preview-section">{getPreview()}</div>
    </div>
  );
}

export default App;
