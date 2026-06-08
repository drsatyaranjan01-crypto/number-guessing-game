let chart;

function calculateEMI(){

    let P = parseFloat(
        document.getElementById("loanAmount").value
    );

    let annualRate = parseFloat(
        document.getElementById("interestRate").value
    );

    let N = parseInt(
        document.getElementById("loanTenure").value
    );

    if(!P || !annualRate || !N){

        alert("Please fill all fields");

        return;
    }

    let R = annualRate / 12 / 100;

    let EMI =
        (P * R * Math.pow(1 + R, N))
        /
        (Math.pow(1 + R, N) - 1);

    let totalPayment = EMI * N;

    let totalInterest =
        totalPayment - P;

    document.getElementById("result").innerHTML =

    `
    <div class="result-card">
    💰 Monthly EMI:
    ₹${EMI.toFixed(2)}
    </div>

    <div class="result-card">
    📈 Total Payment:
    ₹${totalPayment.toFixed(2)}
    </div>

    <div class="result-card">
    🏦 Total Interest:
    ₹${totalInterest.toFixed(2)}
    </div>
    `;

    createChart(P,totalInterest);
}

function createChart(principal,interest){

    let ctx =
    document.getElementById("emiChart");

    if(chart){
        chart.destroy();
    }

    chart = new Chart(ctx,{

        type:'doughnut',

        data:{

            labels:[
                'Principal Amount',
                'Interest Amount'
            ],

            datasets:[{

                data:[
                    principal,
                    interest
                ],

                backgroundColor:[
                    '#36A2EB',
                    '#FF6384'
                ]
            }]
        },

        options:{
            responsive:true
        }
    });
}