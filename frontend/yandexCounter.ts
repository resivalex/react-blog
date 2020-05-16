export default function () {
  ;(function (d, w, c) {
    ;(w[c] = w[c] || []).push(function () {
      try {
        w['yaCounter50273869'] = new w['Ya'].Metrika2({
          id: 50273869,
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true
        })
      } catch (e) {}
    })

    const n: any = d.getElementsByTagName('script')[0]
    const s = d.createElement('script')
    const f = function () {
      n.parentNode.insertBefore(s, n)
    }
    s.type = 'text/javascript'
    s.async = true
    s.src = 'https://mc.yandex.ru/metrika/tag.js'

    if (w['opera'] && w['opera'].toString() === '[object Opera]') {
      d.addEventListener('DOMContentLoaded', f, false)
    } else {
      f()
    }
  })(document, window, 'yandex_metrika_callbacks2')
}
