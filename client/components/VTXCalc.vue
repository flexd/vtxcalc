<template>
  <div id="vtx-calc">
    <div class="columns">
        <div class="column is-two-thirds is-offset-one-quarter">
    <div class="columns">
        <div class="column is-two-thirds">
<div class="box">
            <table class="table">
                <thead>
                    <th>Pilot</th>
                    <th>Band</th>
                    <th>Channel</th>
                    <th>Freq</th>
                    <th>-190</th>
                    <th>+190</th>
                    <th>-240</th>
                    <th>+240</th>
                </thead>
                <tbody>
                    <tr v-for="pilot in pilots">
                        <td>{{pilot.name}}</td>
                        <td>{{pilot.channel.freq}} Mhz</td>
                        <td>{{pilot.channel.band}}</td>
                        <td>CH{{pilot.channel.channel}}</td>
                        <td>{{pilot.channel.freq-190}} Mhz</td>
                        <td>{{pilot.channel.freq+190}} Mhz</td>
                        <td>{{pilot.channel.freq-240}} Mhz</td>
                        <td>{{pilot.channel.freq+240}} Mhz</td>
                    </tr>
                </tbody>
            </table>
            <input v-validate="'required'" v-model="newPilotName" v-on:keyup.enter="addPilot" name="newPilotName" placeholder="Pilotname">
            <input type="checkbox" id="fatshark" value="Fatshark" v-model="bandsAvailable">
            <label for="fatshark">Fatshark</label>
            <input type="checkbox" id="boscamb" value="Boscam A" v-model="bandsAvailable">
            <label for="boscamb">Boscam B</label>
            <input type="checkbox" id="boscamb" value="Boscam B" v-model="bandsAvailable">
            <label for="boscamb">Boscam B</label>
            <input type="checkbox" id="boscame" value="Boscam E" v-model="bandsAvailable">
            <label for="boscame">Boscam E</label>
            <input type="checkbox" id="raceband" value="Raceband" v-model="bandsAvailable">
            <label for="raceband">Raceband</label>
            <p :class="{ 'control': true }">
                <span v-show="errors.has('newPilotName')" class="help is-danger">{{ errors.first('newPilotName') }}</span>
            </p>
</div>
</div>
<div class="column">
<div class="box">
            <table class="table">
                <thead>
                    <th>Freq</th>
                    <th>Band</th>
                    <th>Channel</th>
                    <th>Pilot</th>
                </thead>
                <tbody>
                    <tr v-for="c in channels">
                        <td>{{c.freq}} Mhz</td>
                        <td>{{c.band}}</td>
                        <td>CH{{c.channel}}</td>
                        <td>{{c.pilot}}</td>
                    </tr>
                </tbody>
            </table>

          </div>
</div>
          </div>
</div>
      </div>
  </div>
</template>

<script>
export default {
    data: function () {
        return {
            pilots: [
            ],
            bandsAvailable: [],
            newPilotName: '',
            channels: [
            {freq:5645, band: "BOSCAM E", channel: 4, pilot: "Unassigned"},
            {freq:5658, band: "Race Band", channel: 1, pilot: "Unassigned"},
            {freq:5665, band: "BOSCAM E", channel: 3, pilot: "Unassigned"},
            {freq:5685, band: "BOSCAM E", channel: 2, pilot: "Unassigned"},
            {freq:5695, band: "Race Band", channel: 2, pilot: "Unassigned"},
            {freq:5705, band: "BOSCAM E", channel: 1, pilot: "Unassigned"},
            {freq:5725, band: "BOSCAM A", channel: 8, pilot: "Unassigned"},
            {freq:5732, band: "Race Band", channel: 3, pilot: "Unassigned"},
            {freq:5733, band: "BOSCAM B", channel: 1, pilot: "Unassigned"},
            {freq:5740, band: "Airwave/Fatshark", channel: 1, pilot: "Unassigned"},
            {freq:5745, band: "BOSCAM A", channel: 7, pilot: "Unassigned"},
            {freq:5752, band: "BOSCAM B", channel: 2, pilot: "Unassigned"},
            {freq:5760, band: "Airwave/Fatshark", channel: 2, pilot: "Unassigned"},
            {freq:5765, band: "BOSCAM A", channel: 6, pilot: "Unassigned"},
            {freq:5769, band: "Race Band", channel: 4, pilot: "Unassigned"},
            {freq:5771, band: "BOSCAM B", channel: 3, pilot: "Unassigned"},
            {freq:5780, band: "Airwave/Fatshark", channel: 3, pilot: "Unassigned"},
            {freq:5785, band: "BOSCAM A", channel: 5, pilot: "Unassigned"},
            {freq:5790, band: "BOSCAM B", channel: 4, pilot: "Unassigned"},
            {freq:5800, band: "Airwave/Fatshark", channel: 4, pilot: "Unassigned"},
            {freq:5805, band: "BOSCAM A", channel: 4, pilot: "Unassigned"},
            {freq:5806, band: "Race Band", channel: 5, pilot: "Unassigned"},
            {freq:5809, band: "BOSCAM B", channel: 5, pilot: "Unassigned"},
            {freq:5820, band: "Airwave/Fatshark", channel: 5, pilot: "Unassigned"},
            {freq:5825, band: "BOSCAM A", channel: 3, pilot: "Unassigned"},
            {freq:5828, band: "BOSCAM B", channel: 6, pilot: "Unassigned"},
            {freq:5840, band: "Airwave/Fatshark", channel: 6, pilot: "Unassigned"},
            {freq:5843, band: "Race Band", channel: 6, pilot: "Unassigned"},
            {freq:5845, band: "BOSCAM A", channel: 2, pilot: "Unassigned"},
            {freq:5847, band: "BOSCAM B", channel: 7, pilot: "Unassigned"},
            {freq:5860, band: "Airwave/Fatshark", channel: 7, pilot: "Unassigned"},
            {freq:5865, band: "BOSCAM A", channel: 1, pilot: "Unassigned"},
            {freq:5866, band: "BOSCAM B", channel: 8, pilot: "Unassigned"},
            {freq:5880, band: "Race Band", channel: 7, pilot: "Unassigned"},
            {freq:5885, band: "BOSCAM E", channel: 5, pilot: "Unassigned"},
            {freq:5905, band: "BOSCAM E", channel: 6, pilot: "Unassigned"},
            {freq:5917, band: "Race Band", channel: 8, pilot: "Unassigned"},
            {freq:5925, band: "BOSCAM E", channel: 7, pilot: "Unassigned"},
            {freq:5945, band: "BOSCAM E", channel: 8, pilot: "Unassigned"},

            ],
            usedFreqs: []
        }
    },
    methods: {
        addPilot: function (event) {
            let that = this
            let avail = this.channels.filter(function (channel) {
              return !that.usedFreqs.includes(channel.freq)
             })
            let lastUsed = this.usedFreqs.slice(-1)[0]
            let next = avail[0]
            if (lastUsed) {
              next = avail.find(function (channel) {
                return channel.freq == lastUsed+40
              })
            }
            if (!next) {
              alert("No more frequencies!")
              return
            }
            console.log(next)
            this.usedFreqs.push(next.freq)
            this.pilots.push({name: this.newPilotName, channel: next})
            this.newPilotName = ''
            this.bandsAvailable = []
        }
    }
}
</script>
