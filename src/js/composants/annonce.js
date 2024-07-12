class Article extends HTMLElement {
  constructor() {
    super();
    this.statusColors = {
      urgent: 'red',
      important: 'orange',
      normal: 'green',
      low: 'blue'
    };
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute('title') || 'No Title';
    const description = this.getAttribute('description') || 'No Description';
    const date = this.getAttribute('date') || 'No Date';
    const status = this.getAttribute('status') || 'normal';

    const statusColor = this.statusColors[status.toLowerCase()] || 'default';

    this.innerHTML = `
      <article class="custom-article" data-status="${status.toLowerCase()}">
        <h2>${title}</h2>
        <p>${description}</p>
        <div class="meta">
          <span>${date}</span>
          <span class="status">${status}</span>
        </div>
      </article>
    `;

    // Apply status color class
    this.querySelector('.custom-article').classList.add(`status-${statusColor}`);
  }
}

customElements.define('custom-article', Article);