// Elements
const form = document.getElementById('deviceForm');
const hasBusiness = document.getElementById('hasBusiness');
const businessFields = document.getElementById('businessFields');

const idType = document.getElementById('idType');
const ninField = document.getElementById('ninField');
const otherIdField = document.getElementById('otherIdField');

// Toggle business fields
function toggleBusinessFields() {
  if (hasBusiness.checked) {
    businessFields.style.display = 'block';
    // Make business fields required
    document.getElementById('businessName').required = true;
    document.getElementById('district').required = true;
    document.getElementById('tin').required = true;
    document.getElementById('confirmTin').required = true;
    document.getElementById('businessLicense').required = true;
  } else {
    businessFields.style.display = 'none';
    document.getElementById('businessName').required = false;
    document.getElementById('district').required = false;
    document.getElementById('tin').required = false;
    document.getElementById('confirmTin').required = false;
    document.getElementById('businessLicense').required = false;
  }
}

// Toggle ID fields
function toggleIDFields() {
  const value = idType.value;
  if (value === 'National ID') {
    ninField.style.display = 'block';
    otherIdField.style.display = 'none';
    document.getElementById('nin').required = true;
    document.getElementById('otherIdNumber').required = false;
  } else if (value === 'Passport' || value === 'Other') {
    ninField.style.display = 'none';
    otherIdField.style.display = 'block';
    document.getElementById('nin').required = false;
    document.getElementById('otherIdNumber').required = true;
  } else {
    ninField.style.display = 'none';
    otherIdField.style.display = 'none';
    document.getElementById('nin').required = false;
    document.getElementById('otherIdNumber').required = false;
  }
}

// File validation
function validateFileInput(fileInput) {
  const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
  if (fileInput.files.length > 0) {
    const fileName = fileInput.files[0].name;
    if (!allowedExtensions.exec(fileName)) {
      alert('Please upload a file in JPG, JPEG, or PNG format.');
      fileInput.value = '';
      return false;
    }
  }
  return true;
}

// Event listeners
hasBusiness.addEventListener('change', toggleBusinessFields);
idType.addEventListener('change', toggleIDFields);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // TIN validation if business fields active
  if (hasBusiness.checked) {
    const tin = document.getElementById('tin').value.trim();
    const confirmTin = document.getElementById('confirmTin').value.trim();
    if (tin !== confirmTin) {
      alert("TIN numbers do not match.");
      return;
    }
  }

  // At least one device selected
  const devices = document.querySelectorAll('input[name="deviceType"]:checked');
  if (devices.length === 0) {
    alert("Please select at least one device type.");
    return;
  }

  // Validate ID uploads
  const idFront = document.getElementById('idFront');
  const idBack = document.getElementById('idBack');
  if (!validateFileInput(idFront) || !validateFileInput(idBack)) {
    return;
  }

  alert("Form submitted successfully! (Prototype)");
  form.reset();
  toggleBusinessFields();
  toggleIDFields();
});
