import { TEMPLATES_LIST, compileTemplateToHTML } from '../constants/templates.js';

function TemplateGalleryModal({ isOpen, onClose, onUseTemplate, onPreviewTemplate }) {
  if (!isOpen) return null;

  const handleSelectTemplate = (template) => {
    const compiledCode = compileTemplateToHTML(template);
    
    // Create initial message log indicating template was chosen
    const messages = [
      {
        role: 'user',
        content: `Start a new project from the "${template.name}" starter template.`,
        timestamp: new Date()
      },
      {
        role: 'assistant',
        content: `I have initialized your project with the **${template.name}** layout template. You can now enter natural language commands below to modify elements, change text, swap colors, or add forms!`,
        timestamp: new Date()
      }
    ];

    onUseTemplate(template.name, compiledCode, messages);
  };

  const handlePreview = (template, e) => {
    e.stopPropagation();
    onPreviewTemplate(template);
  };

  return (
    <div className="template-modal-overlay" onClick={onClose}>
      <div className="template-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="template-modal-header">
          <h2 className="template-modal-title">Choose a Starter Template</h2>
          <button className="template-modal-close-btn" onClick={onClose}>&times;</button>
        </div>
        
        <p className="template-modal-subtitle">
          Select a pre-designed layout to jumpstart your project. You can customize every detail afterwards using our AI builder.
        </p>

        <div className="template-gallery-grid">
          {TEMPLATES_LIST.map((template) => (
            <div key={template.id} className="template-gallery-card">
              <div className="template-card-icon-container">
                <span className="template-card-emoji-icon">{template.icon}</span>
                <div className="template-card-hover-overlay">
                  <button 
                    className="template-hover-btn template-btn-use"
                    onClick={() => handleSelectTemplate(template)}
                  >
                    Use Template
                  </button>
                  {template.id !== 'blank' && (
                    <button 
                      className="template-hover-btn template-btn-preview"
                      onClick={(e) => handlePreview(template, e)}
                    >
                      Preview
                    </button>
                  )}
                </div>
              </div>
              <div className="template-card-body">
                <h3 className="template-card-title">{template.name}</h3>
                <p className="template-card-desc">{template.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TemplateGalleryModal;
