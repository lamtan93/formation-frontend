//--------------Factory--------------------
function CommentService($http, $log, apiUrls) {
	/*this.$http = $http;
	this.$log = $log;*/

	return {
			
			findByTripId : function(tripId) {
				return $http.get(apiUrls.full + '/' + tripId);
			},

			addComment: function(tripId, comment) {
			
			this.findByTripId(tripId)
				.then((res) => {
					this.tabComments = res.data.comments;

					 this.newComment = {
					'id' : 'Anonymous',
					'text' : comment
					}
					this.tabComments[this.tabComments.length] = this.newComment;
					
						$http({
						method: 'PUT',
						url: apiUrls.full + '/' + tripId,
						data: this.tabComments
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