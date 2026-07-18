import { useState, useEffect } from 'react';
import { compileTemplateToHTML } from '../constants/templates.js';

function TemplatePreviewModal({ isOpen, template, onClose, onUseTemplate }) {
  const [activeTab, setActiveTab] = useState('preview');
  const [copied, setCopied] = useState(false);
  const [compiledCode, setCompiledCode] = useState('');

  useEffect(() => {
    if (template) {
      setCompiledCode(compileTemplateToHTML(template));
    }
  }, [template]);

  if (!isOpen || !template) return null;

  const handleUseTemplate = () => {
    // Generate messages history
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
    onClose();
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(compiledCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="preview-modal-overlay" onClick={onClose}>
      <div className="preview-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="preview-modal-header">
          <div>
            <h2 className="preview-modal-title">Preview: {template.name}</h2>
            <p className="preview-modal-subtitle">{template.description}</p>
          </div>
          <button className="preview-modal-close-btn" onClick={onClose}>&times;</button>
        </div>

        <div className="preview-modal-toolbar">
          <div className="preview-modal-tabs">
            <button 
              className={`preview-tab-btn ${activeTab === 'preview' ? 'active' : ''}`}
              onClick={() => setActiveTab('preview')}
            >
              Live Preview
            </button>
            <button 
              className={`preview-tab-btn ${activeTab === 'code' ? 'active' : ''}`}
              onClick={() => setActiveTab('code')}
            >
              Source Code
            </button>
          </div>
          <div className="preview-modal-actions">
            {activeTab === 'code' && (
              <button className="preview-action-btn btn-secondary" onClick={handleCopyCode}>
                {copied ? '✓ Copied!' : '📋 Copy Code'}
              </button>
            )}
            <button className="preview-action-btn btn-primary" onClick={handleUseTemplate}>
              Use Template
            </button>
          </div>
        </div>

        <div className="preview-modal-content-area">
          {activeTab === 'preview' ? (
            <iframe 
              srcDoc={compiledCode}
              title={`Preview ${template.name}`}
              className="preview-iframe-view"
              sandbox="allow-scripts"
            />
          ) : (
            <div className="preview-code-view">
              <pre className="preview-code-pre">
                <code className="preview-code-block">{compiledCode}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TemplatePreviewModal;
