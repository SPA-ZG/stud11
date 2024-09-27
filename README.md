URL: https://spa-gzad.onrender.com
1.interpolation/one-way binding - DA src/views/CreateView.vue, :50 :77
2.two-way binding - DA src/views/CreateView.vue, :61 :64 :67 :70 :73
3.methods - DA src/views/CreateView.vue, :32 :89
4.computed properties - DA src/views/CreateView.vue, :50 :77
5.barem jedan scoped style - DA src/views/CreateView.vue, :94 | src/views/HomeView.vue, :14
6.koristiti barem jedan lifecycle hook - NE
7.routing (više stranica) - DA src/App.vue :8-12, src/main.js :11 src/router/index.js
	aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2)
	dinamičko usmjeravanje s 404 stranicom ("catch all")
8.(barem) dvije komponente - NE
9. barem jedna komponenta mora emitirati barem jedan event - NE
10. store (Pinia) - DA src/main.js :11, src/views/pinia.js, src/views/CreateView.vue :6 :24 :38 :81-83
11. asinkroni dohvat podataka s backenda, možete: -NE