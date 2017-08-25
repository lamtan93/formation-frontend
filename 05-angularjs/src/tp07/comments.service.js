/*//--------------Factory--------------------
function CommentService($http, $log, $log) {


	return {

			findByTripId : function(tripId) {
				return this.$http.get(apiUrls.full + '/' + tripId);
			}

			addComment : function(tripId, comment) {
			let trip;
			this.findByTripId(apiUrls.full + '/' + tripId)
				.then((res) => {
					trip = res.data;
					trip.comment = comment;
					this.$http({
						method: 'PUT',
						url: url + '/' + tripId,
						data: trip
					}).then((res) => {
						this.$log.log('status :' + res.statusText, res.status)
					}, (res) => {
						this.$log.log('erreur: ' + res.statusText + ',' + res.status);
					})

				})
			}
	}

}


export default CommentService;*/