import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

let index = 0;
let optionArr = [];
let questionArr = [];
let correctAnswer;
let correct_answer_index = null
let optionChoiceIndex = null
global.mark = 0;
const Quiz = ({ navigation }) => {
	const [question, setQuestion] = useState("");
	const [quizIndex, setQuizIndex] = useState(0);
	const [options, Setoptions] = useState([]);
	const [btnText, setBtnText] = useState("Skip");
  const [pressIndex,setPressIndex] = useState(null)
	let api =
		"https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple&encode=url3986";

	const fetchData = async () => {
		let result = await fetch(api);
		let data = await result.json();
		questionArr = data.results;
		setQuestion(questionArr);
		optionArr = questionArr[quizIndex].incorrect_answers;
		correctAnswer = questionArr[quizIndex].correct_answer;
    let randomIndex = Math.floor(Math.random() * 4);

		optionArr.splice(randomIndex, 0, correctAnswer);
    correct_answer_index = randomIndex;
    console.log("correct Answer : "+correct_answer_index)


		Setoptions(optionArr);
	};

	const handleIndex = () => {
    if (optionChoiceIndex === correct_answer_index) {
      console.log("This is Right");
      global.mark++;
      console.log(global.mark);
    } else {
      console.log("Incorrect");
    }
    setQuizIndex(++index);
    optionArr = questionArr[index].incorrect_answers;
    correctAnswer = questionArr[index].correct_answer;
    let randomIndex = Math.floor(Math.random() * 4);

    optionArr.splice(randomIndex, 0, correctAnswer);
    correct_answer_index = randomIndex;
    console.log('correct '+correct_answer_index)
    Setoptions(optionArr);
    setPressIndex(null);
    console.log("Op choice index : "+optionChoiceIndex )
 
    setBtnText("Skip");
		if (index > 8) {
			navigation.navigate("Result");
		} 
      
		
	};

	const handleChoice = (index) => {
    setPressIndex(index)
		setBtnText("Next");
    optionChoiceIndex = index

	};

	useEffect(() => {
		index = 0;
		fetchData();
	}, []);
	return (
		<View style={style.container}>
			{question && (
				<View style={style.container}>
					<Text style={style.question}>
						{decodeURIComponent(question[quizIndex].question)}
					</Text>

					<View style={style.optionWrapper}>
						{options.map((value, index) => {
							return (
								<TouchableOpacity
									key={index}
									onPress={() => {
										handleChoice(index);
									}}
									style={[
										style.option,pressIndex === index && style.btnPress
									]}
								>
									<Text style={style.optionText}>
										{decodeURIComponent(value)}
									</Text>
								</TouchableOpacity>
							);
						})}
					</View>

					<View style={style.nextBtnWrapper}>
						<TouchableOpacity
							style={style.nextBtn}
							onPress={() => {
								handleIndex();
							}}
						>
							<Text style={style.nextBtnText}>{btnText}</Text>
						</TouchableOpacity>
					</View>
				</View>
			)}
		</View>
	);
};
const style = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 30,
		backgroundColor: "#151119",
		justifyContent: "space-between",
	},
	question: {
		fontSize: 36,
		color: "#fff",
		marginTop: 32,
		textAlign: "center",
		padding: 16,
	},
	optionWrapper: {
		width: "100%",
		alignItems: "center",
	},
	option: {
		padding: 16,
		backgroundColor: "#bd83fe",
		borderRadius: 16,
		color: "#fff",
		width: "75%",
		margin: 16,
	},
	optionText: {
		textAlign: "center",
		fontSize: 24,
	},
	nextBtnWrapper: {
		display: "flex",
		width: "100%",
		flexDirection: "row",
		justifyContent: "flex-end",
		marginBottom: 16,
	},
	nextBtn: {
		backgroundColor: "#bd83fe",
		padding: 16,
		borderRadius: 16,
		width: 100,
		marginRight: 16,
	},
	nextBtnText: {
		textAlign: "center",
	},
	btnPress: {
		backgroundColor: "#0ab2e6",
	},
	optionTrue: {
		backgroundColor: "#e869c9",
	},
});

export default Quiz;
