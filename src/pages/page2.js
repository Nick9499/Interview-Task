import axios from "axios"
import React, { useEffect, useState } from "react"

import { useHistory } from "react-router-dom"
import { PieChart } from "react-minimal-pie-chart"

const Page2 = () => {
	const history = useHistory()
	/*   const [data,setData] = useState([]) */
	const [user, setUser] = useState([])

	const url = "https://rickandmortyapi.com/api/character"

	const clickHandler = () => {
		history.replace("/")
	}
	useEffect(() => {
		let source = axios.CancelToken.source()

		const loadData = async () => {
			try {
				const response = await axios.get(url, { cancelToken: source.token })
				setUser(response.data.results)
			} catch (error) {
				if (axios.isCancel(error)) {
				} else {
					throw error
				}
			}
		}
		setTimeout(() => {
			loadData()
		}, 6000)

		return () => {
			source.cancel()
		}
	}, [])
	console.log(user)

	return (
		<div className='m-5'>
			<div className=' d-flex justify-content-around'>
				<h2>Pie Chart</h2>
				<button className='btn btn-outline-primary' onClick={clickHandler}>
					Go to Users
				</button>
			</div>
			{user.length > 0 && (
				<PieChart
					data={[
						{ title: "1", value: user[0].episode.length, color: "#E38627" },
						{ title: "2", value: user[1].episode.length, color: "#C13C37" },
						{ title: "3", value: user[2].episode.length, color: "#134567" },
						{ title: "4", value: user[3].episode.length, color: "#756653" },
						{ title: "5", value: user[4].episode.length, color: "#433" },
						{ title: "6", value: user[5].episode.length, color: "#94717a" },
						{ title: "7", value: user[6].episode.length, color: "#2159c0" },
						{ title: "8", value: user[7].episode.length, color: "#25eed3" },
						{ title: "9", value: user[8].episode.length, color: "#10db10" },
						{ title: "10", value: user[9].episode.length, color: "#c1d410" },
						{ title: "11", value: user[10].episode.length, color: "#e9da0a" },
						{ title: "12", value: user[11].episode.length, color: "#df8613" },
						{ title: "13", value: user[12].episode.length, color: "#c455a8" },
						{ title: "14", value: user[13].episode.length, color: "#d3ab77" },
						{ title: "15", value: user[14].episode.length, color: "#0224e2" },
						{ title: "16", value: user[15].episode.length, color: "#a4fa04" },
						{ title: "17", value: user[16].episode.length, color: "#c108f0" },
						{ title: "18", value: user[17].episode.length, color: "#1e1d49" },
						{ title: "19", value: user[18].episode.length, color: "#74caca" },
						{ title: "20", value: user[19].episode.length, color: "#74caca" },
					]}
					animate
					animationDuration='1000'
					animationEasing='ease-in-out'
					radius={20}
				/>
			)}
		</div>
	)
}

export default Page2
