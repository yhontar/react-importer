import React from 'react'

const PasteInput = ({ onPaste }) => {
  const handleChange = (event) => {
    const { value } = event.target

    onPaste(value)
  }

  return (
    <textarea
      className='csv-importer-paste-input'
      name='pasteValue'
      placeholder='Paste Here'
      onChange={handleChange}
    />
  )
}

export default PasteInput
