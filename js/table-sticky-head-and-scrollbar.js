
/**
 *
 */
class TableStickyHeadAndScrollbar {
  isInitialized = false
  selector = 'table[data-sticky-table-head-and-scrollbar]'

  /**
   *
   */
  init () {
    if (!this.isInitialized) {
      this.addHandlers()
      this.isInitialized = true
    }
  }

  /**
   *
   */
  addHandlers = () => {
    const tables = document.querySelectorAll(this.selector)
    tables.forEach((table) => {
      this.handleTableScrolls(table)
    })
  }

  /**
   *
   * @param {HTMLTableElement} table
   */
  handleTableScrolls = (table) => {
    const initWidth = table.getBoundingClientRect().width
    table.dataset.initWidth = initWidth

    // Fix widths
    const cells = table.querySelectorAll("th, td")
    cells.forEach((cell) => {
      cell.style.minWidth = `${cell.getBoundingClientRect().width}px`
    })

    // Sticky styles
    table.classList.add("sticky")

    const newWidth = table.getBoundingClientRect().width // after sticky styles added
    const percentWidth = (initWidth / newWidth) * 100
    const thead = table.querySelector("thead")
    const tbody = table.querySelector("tbody")

    const stickyScrollbar = document.createElement("div")
    const stickyScrollbarContent = document.createElement("div")

    stickyScrollbar.classList.add("table-sticky-scrollbar")
    stickyScrollbarContent.style.width = `${percentWidth}%`
    stickyScrollbarContent.classList.add("table-sticky-scrollbar__content")

    stickyScrollbar.appendChild(stickyScrollbarContent)
    table.insertAdjacentElement("beforebegin", stickyScrollbar)

    const container = stickyScrollbar.closest("section")
    container.style.overflow = "unset" // Unset overflow for sticky to work properly

    /*
     * Sync scrolls
     */
    thead.addEventListener("scroll", (e) => {
      const scrollLeft = e.target.scrollLeft
      tbody.scrollLeft = scrollLeft
    })
    tbody.addEventListener("scroll", (e) => {
      const scrollLeft = e.target.scrollLeft
      thead.scrollLeft = scrollLeft
      stickyScrollbar.scrollLeft = scrollLeft
    })
    stickyScrollbar.addEventListener("scroll", (e) => {
      const scrollLeft = e.target.scrollLeft
      tbody.scrollLeft = scrollLeft
    })

    /*
     * Handle window resize
     */
    window.addEventListener("resize", () => {
      const newWidth = table.getBoundingClientRect().width
      const percentWidth = (initWidth / newWidth) * 100
      stickyScrollbarContent.style.width = `${percentWidth}%`
    })
  } // end handleScrolls
}

export default TableStickyHeadAndScrollbar
