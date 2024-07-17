// Ini Javascript
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Select the form element
  const form = document.getElementById('MessageUsForm');

  // Add a submit event listener to the form
  form.addEventListener('submit', function(event) {
      // Prevent the default form submission
      event.preventDefault();

      // Get form data
      const nama = document.getElementById('Nama').value;
      const tanggalLahir = document.getElementById('tanggal-lahir').value;
      const jenisKelamin = document.getElementById('pria').value;
      
        if (jenisKelamin.checked == true ) {
            jenisKelamin.checked == false; 
        } else {
            jenisKelamin.checked == false; 
        }
        
      const pesan = document.getElementById('Pesan').value;

      // Delete form data
      document.getElementById('Nama').value = '';
      document.getElementById('tanggal-lahir').value = ''; 
      document.getElementById('Pesan').value = ''; 
      

      // Construct the output string
      const output = `Nama: ${nama}\nTanggal Lahir: ${tanggalLahir}\nJenis Kelamin: ${jenisKelamin}\nPesan: ${pesan}`;

      // Display the output in the textarea
      document.getElementById('formula').value = output;

     
  })
  
        });
