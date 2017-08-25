//--------------Factory--------------------
function CommentService($http, $log, apiUrls) {

	return {
			
			findByTripId : function(tripId) {
				return $http.get(apiUrls.full + '/' + tripId);
			},

			addComment: function(tripId, comment) {
			
			this.findByTripId(tripId)
				.then((res) => {
					this.trip = res.data;

					this.newComment = ({
						'id': 'Anonymous',
						'text': comment
					})

					this.trip.comments.push(this.newComment);

						$http({
						method: 'PUT',
						url: apiUrls.full + '/' + tripId,
						data: this.trip
					}).then((res) => {
						$log.log('status :' + res.statusText, res.status)
					}, (res) => {
						$log.log('erreur: ' + res.statusText + ',' + res.status);
					})

				},(err)=>{
					console.log(err.status+'--'+err.statusText)
				})
			}
	}

}


export default CommentService;