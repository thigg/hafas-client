#!/bin/bash
# create a TypeScript file from test fixture js and json files and tools/debug-cli/cli.js results

if [ ! -f "./tsconfig.json" ]; then
    echo "please run from project directory"
    exit 1
fi

DATE=$(date)
OUTFILE="types-test-generated.ts"

echo "// created with script './create-types-test-file.sh' at ${DATE}" > ${OUTFILE}
echo "" >> ${OUTFILE}
echo "import { Journeys, Journey, Alternative, Station, Stop, Location, Departures, Arrivals } from './types'" >> ${OUTFILE}
echo "import { RawResult, RawResponse } from './types-raw-api'" >> ${OUTFILE}

echo "const r1 : RawResult = " >> ${OUTFILE}
cat test/fixtures/db-journey.json >> ${OUTFILE}

echo "const r2 : RawResult = " >> ${OUTFILE}
cat test/fixtures/db-journey-2.json >> ${OUTFILE}

echo "const r3 : RawResult = " >> ${OUTFILE}
cat test/fixtures/db-journey-polyline.json >> ${OUTFILE}

sed -e '/use strict/d' -e 's/const dbJourney/const dbJourney: Journey/' test/fixtures/db-journey.js >> ${OUTFILE}

sed -e '/use strict/d' -e 's/const dbJourneyPolyline/const dbJourneyPolyline: Journey/' test/fixtures/db-journey-polyline.js >> ${OUTFILE}

sed -e '/use strict/d' -e 's/const dbArrivals/const dbArrivals: Alternative[]/' test/fixtures/db-arrivals.js >> ${OUTFILE}

sed -e '/use strict/d' -e 's/const bvgRadar/const bvgRadar: Alternative[]/' test/fixtures/bvg-radar.js >> ${OUTFILE}

echo "const journeys : Journeys = " >> ${OUTFILE}
DEBUG=hafas-client node tools/debug-cli/cli.js db journeys 8000149 8000152 '{"results": 10, "transfers": 0, "stopovers": true}' >> ${OUTFILE} 2>x.txt

echo "const rawResponse : RawResponse = " >> ${OUTFILE}
tail -1 x.txt >> ${OUTFILE}
rm x.txt

echo "const locations : (Station | Stop | Location)[] = " >> ${OUTFILE}
node tools/debug-cli/cli.js db locations Hannover >> ${OUTFILE}

echo "const departures : Departures = " >> ${OUTFILE}
node tools/debug-cli/cli.js db departures 8000152 >> ${OUTFILE}

echo "const arrivals : Arrivals = " >> ${OUTFILE}
node tools/debug-cli/cli.js db arrivals 8000152 >> ${OUTFILE}
