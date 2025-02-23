// Toggle mobile navigation menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Load modpacks from Modrinth API
async function loadModpacks() {
  const container = document.getElementById('modpacks-container');
  container.innerHTML = ''; // Clear loading text

  try {
    // If your Modrinth API requires an API key, do not hardcode it.
    // Instead, use a build process to inject environment variables (e.g., via a .env file).
    // For example:
    // const modrinthApiKey = process.env.MODRINTH_API_KEY;
    // For this static site demo, we assume no API key is needed.
    
    const response = await fetch('https://api.modrinth.com/v2/search?query=modpack');
    const data = await response.json();
    const modrinthResults = data.hits.slice(0, 2); // Adjust number of modpacks as needed

    let modpacksHTML = '';
    modrinthResults.forEach(modpack => {
      modpacksHTML += `
        <div class="modpack">
          <h3>${modpack.title}</h3>
          <p>${modpack.description.substring(0, 100)}...</p>
          <a href="${modpack.url}" target="_blank" class="btn">View on Modrinth</a>
        </div>
      `;
    });
    
    container.innerHTML = modpacksHTML;
  } catch (error) {
    container.innerHTML = '<p>Failed to load modpacks.</p>';
    console.error(error);
  }
}

document.addEventListener('DOMContentLoaded', loadModpacks);
